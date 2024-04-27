import InputOutput from "../../shared/input-output.tsx";

interface ICatData {
    name: string,
    color: string
}


const data: ICatData[] = [
    {
        name: "meow 1",
        color: "black"
    },
    {
        name: "meow 2",
        color: "white"
    },
    {
        name: "meow 1",
        color: "black"
    },
    {
        name: "meow 3",
        color: "gray"
    },
    {
        name: "meow 3",
        color: "black"
    },
    {
        name: "meow 2",
        color: "black"
    }
]


/**
 * Задача:
 * Вернуть объект, где ключем будет name, а значением обьект с ключами color и значениями - количеством
 */

interface IGroupedCats {
    [name: string]: {
        [color: string]: number
    }
}

function groupCatsByNameAndCountColors(data: ICatData[]): IGroupedCats {
    return {}
}


export default function GroupAndCount() {
    return (
        <div>
            <InputOutput input={data} output={groupCatsByNameAndCountColors(data)}/>
        </div>
    )
}
