import { Active, Clicked, Closed, Hovered, Opened, Selected, Unselected, WidgetArguments, WidgetEvents, WidgetState } from "./creation/utils";

type TabBarState = {
	index: number;
};

type TabState = {
	index: number;
	isOpened: boolean;
};

type TabEvents = Clicked & Opened & Selected & Unselected & Active & Closed & Hovered;
type TabArguments = [Text: string, Hideable: boolean]

export type TabDeclaration = WidgetArguments<TabArguments> & WidgetEvents<TabEvents> & WidgetState<TabState>
export type TabBarDeclaration = WidgetState<TabState>