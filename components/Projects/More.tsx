import style from "@/styles/more.module.css";
import Link from "next/link";

const More = () => {
  return (
    <div className={style.moreContainer}>
      <h1>Hungry for more?</h1>
      <h1>
        You&apos;ve only seen <span>4</span> projects out of the more than
        <span>20</span>.
      </h1>
      <h1>Check out my <Link href="https://github.com/BarajasY">Github</Link> to see what I&apos;m up to</h1>
    </div>
  );
};

export default More;
