import "../index.css";
export default function Result({today, count}: {today: Date, count: number} ) {
    return(
        <>
            { count === 0 &&  <span>Today is { today.toDateString()} </span> }
            { count > 0 &&  <span>{ count  } Days later is {today.toDateString()} </span> }
            { count < 0 &&  <span>{ Math.abs(count) } Days ago was {today.toDateString()} </span> }
            {/*    <p>*/}
            {/*<span>*/}
            {/*  {count === 0*/}
            {/*      ? "Today is "*/}
            {/*      : count > 0*/}
            {/*          ? `${count} days from today is `*/}
            {/*          : `${Math.abs(count)} days ago was `}*/}
            {/*</span>*/}
            {/*        <span>{today.toDateString()}</span>*/}
            {/*    </p>*/}

        </>
    );
}