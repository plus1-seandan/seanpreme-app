import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const sections = [
  {
    title: "hats",
    imageUrl:
      "https://images.unsplash.com/photo-1466992133056-ae8de8e22809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1983&q=80",
    id: 1,
    linkUrl: "/collections/1",
  },
  {
    title: "jackets",
    imageUrl:
      "https://images.unsplash.com/photo-1602443276032-3dfd0f669041?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=941&q=80",
    id: 2,
    linkUrl: "/collections/3",
  },
  {
    title: "sneakers",
    imageUrl:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    id: 3,
    linkUrl: "/collections/2",
  },
  {
    title: "tops",
    imageUrl:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    size: "large",
    id: 4,
    linkUrl: "/collections/4",
  },
];

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            title={title}
            key={id}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
