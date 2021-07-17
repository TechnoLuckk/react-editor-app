import './styles/style.css';
import parse from 'html-react-parser';
const LiveView = (props) => {
    const toDisplay = props.toDisplay;

    return (
        <div className = "live-view">
        {parse(toDisplay)}
        </div>
    );
}
export default LiveView;