import React, { useEffect, useState } from "react";

const Hierarchical = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [selectedQue, setSelectedQue] = useState(null);
  const [selectedOr, setSelectedOr] = useState(null);
  const [selectedList, setSelectedList] = useState(0); // Initialize selectedList with 0
  let [list1, setList1] = useState([]);

  const list = [
    {
      section: [
        {
          name: "Section",
          label: [
            {
              name: "Label",
              que: [
                {
                  name: "Question",
                  or: [
                    {
                      name: "Or",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  let sectionObj = {
    name: "Section",
    label: [],
  };
  const labelObj = {
    label: [],
  };
  const queObj = {
    que: [],
  };

  const addSectionObj = (section,index) => {
    if(index || index>=0){
      console.log(index);
      section[0].label.push(addLabelObj())
      // setList1(list1[index].section[0].label.push(addLabelObj()));
    }else{
      sectionObj.label.push(addLabelObj());
      return {section:[sectionObj]};
    }
    // {section=[sectionObj]};
  };

  const addLabelObj = (index) => {
    labelObj.label.push(queObj);
    if (index && list1[index]) {
      list1[index] = labelObj;
    }
    return { ...labelObj };
  };

  // const handleSectionClick = (index) => {
  //   setSelectedSection(index);
  //   // setList1([...list1,{}]);
  // };

  const handleLabelClick = (label,index) => {
    label.push(addLabelObj());
    // setSelectedLabel(index);
  };

  const handleQueClick = (index) => {
    setSelectedQue(index);
  };

  const handleOrClick = (index) => {
    setSelectedOr(index);
  };

  useEffect(() => {
    // setList1(list);
  }, []);

  const handleListClick = () => {
    // list1=list1.concat(addSectionObj());
    setList1([...list1, addSectionObj()]);
    // setSelectedList((Listcount) => Listcount + 1); // Increment selectedList
  };

  return (
    <div>
      {list1.map((listItem, listIndex) => (
        <ul key={listIndex}>
          {listItem.section && listItem.section.length &&
            listItem.section.map((sectionItem, sectionIndex) => (
              <li key={sectionIndex}>
                <label>
                  {console.log(sectionIndex)}
                  <input
                    type="radio"
                    name="sections"
                    value={sectionItem.name}
                    checked={selectedSection === sectionIndex}
                    onChange={() => addSectionObj(listItem.section,listIndex)}
                  />
                  {sectionItem.name} {listIndex + 1}
                </label>
                {selectedSection === sectionIndex && (
                  <ul>
                    {sectionItem.label &&
                      sectionItem.label.length &&
                      sectionItem.label.map((labelItem, labelIndex) => (
                        <li key={labelIndex}>
                          <label>
                            <input
                              type="radio"
                              name="labels"
                              value={labelItem.name}
                              checked={selectedLabel === labelIndex}
                              onChange={() => handleLabelClick(sectionItem.label,labelIndex)}
                            />
                            {labelItem.name} {labelIndex}
                          </label>
                          {selectedLabel === labelIndex && (
                            <ul>
                              {labelItem.que &&
                                labelItem.que.length &&
                                labelItem.que.map((queItem, queIndex) => (
                                  <li key={queIndex}>
                                    <label>
                                      <input
                                        type="radio"
                                        name="questions"
                                        value={queItem.name}
                                        checked={selectedQue === queIndex}
                                        onChange={() =>
                                          handleQueClick(queIndex)
                                        }
                                      />
                                      {queItem.name} {queIndex}
                                    </label>
                                    {selectedQue === queIndex && (
                                      <ul>
                                        {queItem.or &&
                                          queItem.or.length &&
                                          queItem.or.map((orItem, orIndex) => (
                                            <li key={orIndex}>
                                              <label>
                                                <input
                                                  type="radio"
                                                  name="options"
                                                  value={orItem.name}
                                                  checked={
                                                    selectedOr === orIndex
                                                  }
                                                  onChange={() =>
                                                    handleOrClick(orIndex)
                                                  }
                                                />
                                                {orItem.name} {orIndex}
                                              </label>
                                            </li>
                                          ))}
                                      </ul>
                                    )}
                                  </li>
                                ))}
                            </ul>
                          )}
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      ))}
      <button onClick={handleListClick}> Add List </button>
    </div>
  );
};


export default Hierarchical;
