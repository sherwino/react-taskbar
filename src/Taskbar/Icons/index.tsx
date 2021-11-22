import * as React from "react";
import Chrome from "./Chrome";
import Explorer from "./Explorer";
import Firefox from "./Firefox";
import Outlook from "./Outlook";
import ReactStart from "./ReactStart";
import Task from "./Task";
import VSCode from "./VSCode";
import { IconContainer } from "./Icons.styles";
import { ICONS } from "../../utils/const";

const getIconComponent = (
  name: IconsType
): React.MemoExoticComponent<() => JSX.Element> => {
  switch (name) {
    case ICONS.chrome:
      return Chrome;

    case ICONS.explorer:
      return Explorer;

    case ICONS.firefox:
      return Firefox;

    case ICONS.outlook:
      return Outlook;

    case ICONS.start:
      return ReactStart;

    case ICONS.task:
      return Task;

    case ICONS.vscode:
      return VSCode;

    default:
      return Explorer;
  }
};

const handleOnClick = (e: React.MouseEvent<HTMLDivElement>, name: string) => {
  alert(`Clicked on ${name}`);
};

/**
 * Returns the selected icon wrapped in a container
 * Icons will inherit a few properties from this component wrapper
 * OnPress methods, styles, and more.
 * Returns an Explorer component when a match is not found
 * @param props
 * @returns Icon
 */
const Icon = (props: IconWrapper): JSX.Element => {
  const IconComponent = getIconComponent(props.name);
  return (
    <IconContainer
      spin={props.spin}
      onClick={(e) => handleOnClick(e, props.name)}
    >
      <IconComponent />
    </IconContainer>
  );
};

export { Icon, ICONS };
