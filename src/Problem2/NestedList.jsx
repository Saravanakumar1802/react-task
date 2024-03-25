import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "User",
    children: [
      {
        id: 2,
        name: "Logan",
        children: [
          { id: 5, name: "File 1" },
          { id: 6, name: "File 2" },
        ],
      },
      { id: 3, name: "Shared", children: [{ id: 7, name: "File 3" }] },
      {
        id: 8, name: "Guest", children: [
          { id: 9, name: "Desktop" },
          { id: 10, name: "Documents" },
          { id: 11, name: "Downloads" },
          { id: 12, name: "Movies" },
          { id: 13, name: "Music" },
          { id: 14, name: "Picture" },
          { id: 15, name: "Public" },
        ]
      }
    ],
  },



  {
    id: 4,
    name: "System",
    children: [
      { id: 16, name: "Subfolder 3", children: [{ id: 17, name: "File 4" }] },
    ],
  },

  {
    id: 5,
    name: "Library",
    children: [
      {
        id: 17, name: "Default", children:
          [
            { id: 19, name: "AppData" },
            { id: 20, name: "Documents" },
            { id: 21, name: "Saved Games" },
          ]
      },

      {
        id: 22, name: "Public", children:
          [
            { id: 23, name: "Roaming" },
            { id: 24, name: "Public Desktop" },
            { id: 25, name: "BlueStacks" },
          ]
      },
    ]
  },
  {
    id: 6,
    name: "Drivers",
    children: [
      { id: 26, name: "AMD Control Panel", children: [{ id: 27, name: "AMD Logs" }, { id: 28, name: "Data" }] },
      { id: 29, name: "LAN Driver", children: [{ id: 30, name: "x64" }, { id: 31, name: "Realtek_LAN" }] },
    ]
  }
];

const NestedList = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (id) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span
            onClick={() => toggleItem(item.id)}
          >
            {item.name}
          </span>
          {expandedItems.includes(item.id) && item.children && (
            <NestedList items={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

const DataComp = () => {
  return (
    <div>
      <h2>File Explorer</h2>
      <NestedList items={data} />
    </div>
  );
};

export default DataComp;
