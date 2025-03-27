import { Changed, Hovered, WidgetArguments, WidgetEvents, WidgetState } from "./creation/utils";
import { EventApi } from "./creation/widgetClass";

type ProgressBarArguments = [Text?: string, Format?: string];
type ProgressBarEvents = Changed & Hovered;
type ProgressBarState = {
	progress: number;
};

type PlotLinesArguments = [
	Text?: string,
	Height?: number,
	Min?: number,
	Max?: number,
	TextOverlay?: string,
	BaseLine?: number,
];
type PlotLinesEvents = Hovered;
type PlotLinesState = {
	values: number;
	hovered: number;
};

export type ProgressBarDeclaration = WidgetArguments<ProgressBarArguments> &
	WidgetEvents<ProgressBarEvents> &
	WidgetState<ProgressBarState>;

export type PlotLinesDeclaration = WidgetArguments<PlotLinesArguments> &
	WidgetEvents<PlotLinesEvents> &
	WidgetState<PlotLinesState>;
