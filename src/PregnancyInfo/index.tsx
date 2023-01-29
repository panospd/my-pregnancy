import { PregnancyProgress } from "../PregnancyInfoForm/PregnancyProgress"

interface PregnancyInfoProps {
    progress: PregnancyProgress
}

function PregnancyInfo(props: PregnancyInfoProps): JSX.Element {
    return (
        <div>
            {JSON.stringify(props.progress)}
        </div>
    ) 
}

export default PregnancyInfo