import { useMemo, useCallback, useState } from "react";

const AvgMemo = () => {
    /* 입력할 값 */
    const [inputNum, setInputNum] = useState(0);
    const [num, setNum] = useState([0]);

    /* 콜백 함수 */
    const onChange = useCallback((e) => {
        setInputNum(e.target.value);
    }, []);

    const avgNum = useCallback(() => {
        setNum([...num, parseInt(inputNum)]);
        setInputNum(0);
    }, [inputNum, num]);

    const allAvg = (list) => {
        return list.reduce((prevValue, currentValue) => prevValue+currentValue)/list.length;
    };

    /* useMemo 사용 */
    const avg = useMemo(() => allAvg(num), [num]);

    return (
        <div>
            <hr />
            <input type="number" value={inputNum}
            onChange={onChange}/>
            <button onClick={avgNum}>추가</button>
            <h3>모든 수의 평균: {avg}</h3>
            <ul>
                {num.map((n, idx) => (
                    <li key={idx}>{n}</li>
                ))}
            </ul>
        </div>
    )
};

export default AvgMemo;