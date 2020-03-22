import React, { useState } from "react";
import TextColorPicker from "components/TextColorPicker";

const initColor = "#96d35f";

const Home = () => {
  const [backgroundColor, backgroundColorChange] = useState(initColor);

  return (
    <div>
      <TextColorPicker
        initColor={initColor}
        colorOnChange={c => backgroundColorChange(c)}
      />
      <div style={{ backgroundColor: backgroundColor }}>
        Color change example
      </div>
    </div>
  );
};

export default Home;
