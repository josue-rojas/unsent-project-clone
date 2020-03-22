import React, { useState } from "react";
import ColorPicker from "components/ColorPicker";

const initColor = "#96d35f";

const Home = () => {
  const [backgroundColor, backgroundColorChange] = useState(initColor);

  return (
    <div>
      <ColorPicker
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
