export default function PrettyJson({data}: { data: unknown }) {
    return (
        <div>
        <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}
