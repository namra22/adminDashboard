import './widgets.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { red } from '@mui/material/colors';
export default function Widget({ type }){
    let data;
    if(type=='user'){
        data={
            title:"USERS",
            isMoney:false,
            link:"See all users",
            icon:<PersonOutlinedIcon className='icon' style={{color:'crimson', backgroundColor:'rgba(255,0,0,0.2', borderRadius:'10%'}} />
        };
    }
    else if(type=='order'){
        data={
            title:"ORDER",
            isMoney:false,
            link:"View all orders",
            icon:<ShoppingCartOutlinedIcon className='icon' style={{color:'orange', backgroundColor:'rgba(218,165,32,0.2', borderRadius:"10%"}} />
        };
    }
    else if(type=='earning'){
        data={
            title:"EARNING",
            isMoney:true,
            link:"View net earning",
            icon:<MonetizationOnOutlinedIcon className='icon' style={{color:'green', backgroundColor:'rgba(0,255,0,0.2', borderRadius:"10%"}}/>
        };
    }
    else if(type=='balance'){
        data={
            title:"BALANCE",
            isMoney:true,
            link:"View net balance",
            icon:<AccountBalanceOutlinedIcon className='icon' style={{color:'blue', backgroundColor:'rgba(0,0,255,0.2', borderRadius:"10%"}}/>
        };
    }
    else {
        data = {
            title: "UNKNOWN",
            isMoney: false,
            link: "N/A",
            icon: <PersonOutlinedIcon className='icon' /> // Default icon
        };
    }
    return(
       <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "Rs."}{100}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {20}%
            </div>
            {data.icon}
        </div>
       </div> 
    )
}