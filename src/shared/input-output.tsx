import PrettyJson from "./pretty-json.tsx";

export default function InputOutput({input, output}: { input: unknown, output: unknown }) {
    return (
        <div className={"flex justify-evenly"}>
            <div>
                <h5 className={"text-rose-600 text-xl font-bold text-center"}>
                    input
                </h5>
                <PrettyJson data={input}/>
            </div>
            <div>
                <h5 className={"text-blue-600 text-xl font-bold text-center"}>
                    output
                </h5>
                <PrettyJson data={output}/>
            </div>
        </div>
    )
}
