import React from "react";

const Hierarchical = () => {
  const section = [
    {
      name: "Section",
      label: [
        {
          name: "label",
          que: [
            {
              name: "Question",
              or: [
                {
                  name: "OR",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <div>
        {section?.map((propt, index) => {
          return (
            <ul key={index}>
              <li>
                <label>
                  <input type="radio" name="options" value="option1" />
                  {propt.name} {/* Displaying section name */}
                </label>
                <div>
                  {propt.label.map((label, index2) => {
                    return (
                      <li key={index2}>
                        <label>
                          <input type="radio" name="options" value="option2" />
                          {label.name} {/* Displaying label name */}
                        </label>
                        <div>
                          {label.que.map((que, index3) => {
                            return (
                              <li key={index3}>
                                <label>
                                  <input
                                    type="radio"
                                    name="options"
                                    value="option3"
                                  />
                                  {que.name} {/* Displaying que name */}
                                </label>
                                <div>
                                  {que.or.map((or, index4) => {
                                    return (
                                      <li key={index4}>
                                        <label>
                                          <input
                                            type="radio"
                                            name="options"
                                            value="option4"
                                          />
                                          {or.name} {/* Displaying or name */}
                                        </label>
                                      </li>
                                    );
                                  })}
                                </div>
                              </li>
                            );
                          })}
                        </div>
                      </li>
                    );
                  })}
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Hierarchical;
