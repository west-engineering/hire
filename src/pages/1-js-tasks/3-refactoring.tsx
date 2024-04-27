import {useState} from "react";

/**
 * Задача:
 * Нужно отрефактирить этот код
 */
export default function Refactoring() {
    const [counter, setCount] = useState(0)


    return (
        <div className={"flex justify-center"}>
            <div>
                <div className={"text-2xl"}>
                    Counter: {counter}
                </div>
                <button className={"mt-2 p-4 rounded-full bg-blue-700 text-blue-100 text-2xl"}
                        onClick={() => setCount(counter + 1)}>
                    Click me
                </button>

                <div className={"text-xl mt-4"}>
                    Result: {
                    counter === 0 ? "0" :
                        counter === 1 ? "Hey!" :
                            counter === 2 ? "Yooo!" :
                                counter === 3 ? "Easy ) " :
                                    counter === 4 ? "Booom" : ""
                }
                </div>

            </div>
        </div>
    )

}
