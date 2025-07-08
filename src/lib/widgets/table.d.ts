import { Hovered, WidgetArguments, WidgetEvents } from "./creation/utils";

type TableArguments = [
  NumColumns: number,
  Header: boolean,
  RowBackground: boolean,
  OuterBorders: boolean,
  InnerBorders: boolean,
  Resizable: boolean,
  FixedWidth: boolean,
  ProportionalWidth: boolean,
  LimitTableWidth: boolean,
];
type TableEvents = Hovered;

export type TableDeclaration = WidgetArguments<TableArguments> & WidgetEvents<TableEvents>;
