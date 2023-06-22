import React from "react";

import { timeLimeData } from "../../Utils/Data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLine = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={slideIn("up", "tween", 0.2, 1)}
      className="timeline-container"
      style={{ marginTop: "1.5rem" }}
    >
      <h2 style={{ textAlign: "center", color: "#fff" }}>What we do</h2>
      <VerticalTimeline>
        {timeLimeData.map((t, i) => {
          const { Icon, title, desc } = t;

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: " #f7efef",
                color: "black",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
                color: "red",
              }}
              icon={<Icon />}
            >
              {title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{title}</h3>
                  {desc && (
                    <p>
                      {readMore === title
                        ? desc
                        : `${desc.substring(0, 80)}...`}
                      <button
                        onClick={() =>
                          readMore === title
                            ? setReadMore("")
                            : setReadMore(title)
                        }
                      >
                        {readMore === title ? "show less" : "read more"}
                      </button>
                    </p>
                  )}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </motion.div>
  );
};

export default TimeLine;
