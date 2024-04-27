import InputOutput from "../../shared/input-output.tsx";

interface IDate {
    source_id: string,
    value: number
}

const data: IDate[] = [
    {
        source_id: "1",
        value: 1,
    },
    {
        source_id: "2",
        value: 15,
    },
    {
        source_id: "1",
        value: 22,
    },
    {
        source_id: "3",
        value: 60,
    },
    {
        source_id: "1",
        value: 12,
    },
    {
        source_id: "2",
        value: 15,
    },
    {
        source_id: "3",
        value: 11,
    }
]


/**
 * Задача:
 * Вывести массив объектов с последними значениями value для каждого source_id
 */
function getLastSourceObjects(data: IDate[]): IDate[] {

    return data
}

export default function LastElementTask() {
    return (
        <div>
            <InputOutput input={data} output={getLastSourceObjects(data)}/>
        </div>
    )
}
