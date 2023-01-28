import { PregnancyDate } from "../PregnancyInfoForm/PregnancyDate"

interface PregnancyInfoProps {
    periodDate: PregnancyDate
}

function PregnancyInfo(props: PregnancyInfoProps) {
    return <div>{JSON.stringify(props.periodDate)}</div>
}

export default PregnancyInfo