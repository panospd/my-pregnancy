import { PregnancyDate } from "../PregnancyInfoForm/PregnancyDate"

interface PregnancyInfoProps {
    info: PregnancyDate
}

function PregnancyInfo(props: PregnancyInfoProps): JSX.Element {
    return (
        <div>
            {JSON.stringify(props.info.progress())}
        </div>
    ) 
}

export default PregnancyInfo