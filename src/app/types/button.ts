export type CustomButtonProps = {
  type:
    | "text"
    | "contained"
    | "outlined"
    | "primaryContained"
    | "primaryOutlined";
  onClick: () => void;
  height?: string;
  width?: string;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
  loading?: boolean;
  disabled?: boolean;
  children: string | React.ReactNode;
};

type StandarButtonType = {
  type: "primaryContained" | "primaryOutlined";
  onClick: () => void;
  height?: string;
  width?: string;
  loading?: boolean;
  disabled?: boolean;
  children: string | React.ReactNode;

  // this is not needed for standard button
  color?: undefined;
  borderColor?: undefined;
  backgroundColor?: undefined;
};

type CustomButtonType = {
  onClick: () => void;
  height?: string;
  width?: string;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
  loading?: boolean;
  disabled?: boolean;
  children: string | React.ReactNode;

  // this is not needed for custom button
  type?: undefined;
};

export type ButtonProps = StandarButtonType | CustomButtonType;

export type DropdownButtonProps = Omit<CustomButtonProps, "onClick"> & {
  dropdownContent: React.ReactNode;
};
