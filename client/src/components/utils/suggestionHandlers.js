export const handleAcceptSuggestion = async (user, suggestion,fetchUserPortfolio,
    updateUserPortfolio,) => {
    try {
      const response = await fetch("/api/acceptSuggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.sub, suggestion }),
      });

      if (response.status === 200) {
        fetchUserPortfolio(user.sub, updateUserPortfolio);
      } 
    } catch (error) {
      console.log("Error accepting suggestion:", error);
    }
  };


  export const handleDeclineSuggestion = async (user, suggestion,fetchUserPortfolio,
    updateUserPortfolio,) => {
    try {
      const response = await fetch("/api/declineSuggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.sub, suggestion }),
      });

      if (response.status === 200) {
         fetchUserPortfolio(user.sub, updateUserPortfolio);
      } 
    } catch (error) {
      console.log("Error declining suggestion:", error);
    }
  };

  export const handleDeleteSuggestion = async (user, suggestion,fetchUserPortfolio,
    updateUserPortfolio,) => {
    try {
      const response = await fetch("/api/deleteSuggestion", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.sub, suggestion }),
      });

      if (response.status === 200) {
         fetchUserPortfolio(user.sub, updateUserPortfolio);
      }
    } catch (error) {
      console.log("Error deleting suggestion:", error);
    }
  };

  export const handleDeleteSuggestionHistory = async (user, suggestionHistory,fetchUserPortfolio,
    updateUserPortfolio,) => {
    try {
      const response = await fetch("/api/deleteSuggestionHistory", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.sub, suggestionHistory }),
      });

      if (response.status === 200) {
         fetchUserPortfolio(user.sub, updateUserPortfolio);
      } 
    } catch (error) {
      console.log("Error deleting suggestion history:", error);
    }
  };