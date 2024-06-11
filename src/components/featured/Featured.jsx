import "./featured.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardControlKeyOutlinedIcon from '@mui/icons-material/KeyboardControlKeyOutlined';
export default function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={4} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">Rs.90,000</p>
        <p className="description">
          Previous transaction processing. Last payment may not be included.
        </p>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    <div className="resultAmount">Rs.2M</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last week</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    <div className="resultAmount">Rs.2M</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult positive">
                    <KeyboardControlKeyOutlinedIcon fontSize="small" />
                    <div className="resultAmount">Rs.2M</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
