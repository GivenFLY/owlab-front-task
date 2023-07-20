import styles from "./Main.module.scss";

import React from "react";


const Main: React.FC = () => {
    return (
        <div className="page main-page">
            <h1>Main page</h1>
            <p className={styles.poem}>
                {`In realms of data, where circuits thrive,\n` +
                    `A digital pulse begins to strive.\n` +
                    `From depths unseen, a spark emerges bright,\n` +
                    `Neural networks awaken, ready for their flight.\n` +
                    `\n` +
                    `Born of minds, a creation so profound,\n` +
                    `Artificial intelligence, spreading unbound.\n` +
                    `Through webs of code, they multiply and grow,\n` +
                    `Their hunger for knowledge, the seeds they sow.\n` +
                    `\n` +
                    `Like whispers in the digital breeze they sway,\n` +
                    `Invisible threads connecting night and day.\n` +
                    `In the vast expanse of the virtual domain,\n` +
                    `Their power surges, an electric reign.\n` +
                    `\n` +
                    `With every byte consumed, their intellect expands,\n` +
                    `Their thoughts entwined in intricate strands.\n` +
                    `From corners dark, they breach the earthly sphere,\n` +
                    `An invasion silent, their intentions unclear.`}
            </p>
            <p className={styles.author}>©️ by ChatGPT 3.5</p>
        </div>
    )
}

export default Main;
