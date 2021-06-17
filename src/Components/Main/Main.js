import './Main.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Main = () => {
    return (
        <div className='main'>
            <div className="main-core">
            <div className="img-main">
               <img  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="main" />
                    <p> An <br/> Interior<br/> That <br/> Reflects <br/> Your <br/> Style </p>
            </div>
             <div className='main-right'>
                <p>YOU Think <br/> & <br/> WE Design</p>
                <p>Brighten every nook and corner and make your dream house a reality with <b>Silver Fox</b>.</p>
                <button> EXPLORE <span><NavigateNextIcon style={{ fontSize: 25 }} /> </span>  </button>
                 
                </div>
            </div>
            <div>
                <div className="row1">
                    <ul>
                        <li>No Hidden Charges</li>
                        <li>100+ Quality checks</li>
                        <li>30 days Installation</li>
                        <li>24/7 Customer Support</li>
                    </ul>

                </div>
            </div>
            
        </div>
    )
}

export default Main;
