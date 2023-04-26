import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {format} from "date-fns"

const CoinChart = ({ singleCoin }) => {
    const lastUpdatedTime = new Date(singleCoin.last_updated).getTime(); // in milliseconds
    const oneHour = 3600000; // in milliseconds

    const chartData = singleCoin.sparkline_in_7d.price.map((price, index) => {
      const timestamp = lastUpdatedTime - (singleCoin.sparkline_in_7d.price.length - index) * oneHour; // in milliseconds
      const dateTime = new Date(timestamp); // full date
      return { dateTime, price };
    });
  
    const formatDateHandle = (date) => {
      return  format(date, "MMMM d") // transform into this format
    };

    const formatToolTipDate = (date) => {
        return format(date, "MMMM d H:00")
    }
  
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gainChart" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="lossChart" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ca8282" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ca8282" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="dateTime" tickFormatter={formatDateHandle}  />
          <YAxis />
          <Tooltip labelFormatter={formatToolTipDate} />
          <Area
            type="monotone"
            dataKey="price"
            stroke={singleCoin.price_change_24h < 0 ? "darkred" : "green"}
            strokeWidth={2}
            fill={singleCoin.price_change_24h < 0 ? "url(#lossChart)" : "url(#gainChart)"}
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  };
  
  export default CoinChart;