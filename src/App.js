import { useEffect, useRef, useState } from "react";
import * as Styled from "./StyledComponents";
import "./styles.css";
import { createArray, randomBoolean } from "./utils";
export default function App() {
  const [width, setWidth] = useState("");
  const [gridLayout, setGridLayout] = useState([]);
  const [user, setUser] = useState("");
  const [food, setFood] = useState({ food1: "", food2: "", food3: "" });
  const App = useRef(null);

  useEffect(() => App.current.focus());
  useEffect(() => {
    if (food.food1 === user) {
      setFood({ ...food, food1: "" });
    } else if (food.food2 === user) {
      setFood({ ...food, food2: "" });
    } else if (food.food3 === user) {
      setFood({ ...food, food3: "" });
    }
    return () => {};
  }, [food.food1, food.food2, food.food3, user]);

  useEffect(() => {
    let newArr = createArray(width);
    setGridLayout(newArr);
    setUser("22");
    setFood({
      food1: randomBoolean(parseInt(width)),
      food2: `11`,
      food3: `${width}${width}`,
    });
    return () => {};
  }, [width]);

  useEffect(() => {
    if (!width) {
      const grid = prompt("Please enter Board width");
      if (grid) {
        setWidth(grid);
      } else {
        alert("You need to enter Board width to play game");
      }
    }
    return () => {};
  }, []);

  useEffect(() => {
    if (!food.food1 && !food.food2 && !food.food3 && user) {
      alert("Game Over ^_^");
    }
  }, [food.food1, food.food2, food.food3]);

  const handleKeyDown = ({ key }) => {
    if (key === "ArrowLeft" && user[0] !== "1") {
      return setUser(`${parseInt(user[0], 10) - 1}${user[1]}`);
    } else if (key == "ArrowRight" && user[0] !== width) {
      return setUser(`${parseInt(user[0], 10) + 1}${user[1]}`);
    } else if (key == "ArrowUp" && user[1] !== "1") {
      return setUser(`${user[0]}${parseInt(user[1], 10) - 1}`);
    } else if (key == "ArrowDown" && user[1] !== width) {
      return setUser(`${user[0]}${parseInt(user[1], 10) + 1}`);
    }
  };

  return (
    <div
      className="App"
      tabIndex={width && "0"}
      onKeyDown={(e) => handleKeyDown(e)}
      ref={App}
    >
      {width && gridLayout[0] ? (
        <Styled.Maze num={width}>
          {gridLayout.map((col, i) => (
            <div className="row" key={col[i]}>
              {col.map((row, j) => (
                <div className="grid-item" key={row}>
                  {`${i + 1}${j + 1}` === user && (
                    <img
                      src={process.env.PUBLIC_URL + "/png/mario.png"}
                      alt="mario"
                    />
                  )}
                  {`${i + 1}${j + 1}` === food.food1 && (
                    <img
                      src={process.env.PUBLIC_URL + "/png/food.png"}
                      alt="food"
                    />
                  )}
                  {`${i + 1}${j + 1}` === food.food2 && (
                    <img
                      src={process.env.PUBLIC_URL + "/png/food.png"}
                      alt="food"
                    />
                  )}
                  {`${i + 1}${j + 1}` === food.food3 && (
                    <img
                      src={process.env.PUBLIC_URL + "/png/food.png"}
                      alt="food"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </Styled.Maze>
      ) : (
        <div>You didnt enter Board width</div>
      )}
    </div>
  );
}
