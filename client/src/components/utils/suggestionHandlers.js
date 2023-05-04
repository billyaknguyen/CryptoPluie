import {toast} from "react-toastify"


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

      const awaitingAccept = async () => {
        await fetchUserPortfolio(user.sub, updateUserPortfolio)
      }
  
      if (response.status === 200) {
        toast.promise (
          awaitingAccept(),
          {
            pending: "Getting suggestion approved...",
            success: "You have successfully accepted a suggestion",
            error: "Oops, Please try again"
          },
          {
            autoClose: 3000,
          }
        )
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

      const awaitingDecline = async () => {
        await fetchUserPortfolio(user.sub, updateUserPortfolio)
      }
  
      if (response.status === 200) {
        toast.promise (
          awaitingDecline(),
          {
            pending: "Getting suggestion declined...",
            success: "You have successfully declined a suggestion",
            error: "Oops, Please try again"
          },
          {
            autoClose: 3000,
          }
        )
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

      const awaitingDelete = async () => {
        await fetchUserPortfolio(user.sub, updateUserPortfolio)
      }
  
      if (response.status === 200) {
        toast.promise (
          awaitingDelete(),
          {
            pending: "Getting suggestion deleted...",
            success: "You have successfully deleted a suggestion",
            error: "Oops, Please try again"
          },
          {
            autoClose: 3000,
          }
        )
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

      const awaitingDeleteHistory = async () => {
        await fetchUserPortfolio(user.sub, updateUserPortfolio)
      }
  
      if (response.status === 200) {
        toast.promise (
          awaitingDeleteHistory(),
          {
            pending: "Getting suggestion history deleted...",
            success: "You have successfully deleted a suggestion history",
            error: "Oops, Please try again"
          },
          {
            autoClose: 3000,
          }
        )
      } 
    } catch (error) {
      console.log("Error deleting suggestion history:", error);
    }
  };