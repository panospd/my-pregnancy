import { PregnancyDate } from "../PregnancyInfoForm/PregnancyDate";

interface PregnancyInfoProps {
    info: PregnancyDate;
}

function PregnancyInfo(props: PregnancyInfoProps): JSX.Element {
    const progress = props.info.progress();
    return (
        <div className="card" style={{ width: "50em" }}>
            <img className="card-img-top" src="./fetus.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Congratulations on your pregnancy!!</h5>
                <p className="card-text">
                    Your pregnancy progress: <b>{progress.week} weeks</b> and <b>{progress.day} days</b>
                </p>
            </div>
        </div>
    );
}

export default PregnancyInfo;
