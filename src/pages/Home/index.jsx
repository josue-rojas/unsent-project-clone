import React, { useState } from "react";
import TextColorPicker from "components/TextColorPicker";
import ColorTextArea from "components/ColorTextArea";

const initTextColor = "#0";
const initBackgroundColor = "#96d35f";

const Home = () => {
  const [backgroundColor, backgroundColorChange] = useState(
    initBackgroundColor
  );
  const [textColor, textColorChange] = useState(initTextColor);

  return (
    <div>
      <TextColorPicker
        initColor={backgroundColor}
        colorOnChange={c => backgroundColorChange(c)}
      />
      <TextColorPicker
        initColor={textColor}
        colorOnChange={c => textColorChange(c)}
      />
      <ColorTextArea backgroundColor={backgroundColor} textColor={textColor} />
    </div>
  );
};

export default Home;
