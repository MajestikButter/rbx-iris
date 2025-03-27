import { WidgetArguments } from "./creation/utils";

type IndentArguments = [Width?: number];
type SameLineArguments = [
	Width?: number,
	VerticalAlignment?: Enum.VerticalAlignment,
	HorizontalAlignment?: Enum.HorizontalAlignment,
];

export type IndentDeclaration = WidgetArguments<IndentArguments>;
export type SameLineDeclaration = WidgetArguments<SameLineArguments>;
