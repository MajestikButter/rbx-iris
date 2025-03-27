import { State } from "../../..";
import { EventApi } from "./widgetClass";

type WidgetArguments<T extends Array<unknown>> = {
	Arguments: T;
};

type WidgetState<T extends object> = {
	State: T;
};

type WidgetEvents<T extends object> = {
	Events: T;
};
type WidgetExtra<T extends Array<unknown>> = {
	Extra: T;
};
type WidgetDeclaration = Partial<WidgetArguments<Array<unknown>> & WidgetState<object> & WidgetEvents<object> & WidgetExtra<Array<unknown>>>;

//---[[Events]]---//

//-----------------------
type Hovered = {
	isHoveredEvent: boolean;
	hovered: EventApi;
};
//-----------------------
type Clicked = {
	lastClickedTick: number;
	clicked: EventApi;
};
type RightClicked = {
	lastRightClickedTick: number;
	rightClicked: EventApi;
};

type CtrlClicked = {
	lastCtrlClickedTick: number;
	ctrlClicked: EventApi;
};

type DoubleClicked = {
	lastClickedTime: number;
	lastClickedPosition: Vector2;
	lastDoubleClickedTick: number;
	doubleClicked: EventApi;
};
//-----------------------
type Opened = {
	lastOpenedTick: number;
	opened: EventApi;
};
type Closed = {
	lastClosedTick: number;
	closed: EventApi;
};
//-----------------------
type Selected = {
	lastSelectedTick: number;
	selected: EventApi;
};
type Unselected = {
	lastUnselectedTick: number;
	unselected: EventApi;
};
type Active = {
	active: EventApi;
};
//-----------------------
type Collapsed = {
	lastCollapsedTick: number;
	collapsed: EventApi;
};
type Uncollapsed = {
	lastUncollapsedTick: number;
	uncollapsed: EventApi;
};
//-----------------------
type Checked = {
	lastCheckedTick: number;
	checked: EventApi;
};
type Unchecked = {
	lastUncheckedTick: number;
	unchecked: EventApi;
};
//-----------------------
type NumberChanged = {
	lastNumberChangedTick: number;
	numberChanged: EventApi;
};
type TextChanged = {
	lastTextChangedTick: number;
	textChanged: EventApi
}
//------------------------
type Changed = {
	lastChangedTick: number;
	changed: EventApi
}

//Grouping
type ClickEvents = Clicked & RightClicked & DoubleClicked & CtrlClicked;
type OpenEvents = Opened & Closed;
type CheckEvents = Checked & Unchecked;
type SelectEvents = Selected & Unselected;
type CollapseEvents = Collapsed & Uncollapsed;

// typing creators
type TupleOmit = "length" | "0";
type TupleToObject<T extends any[], C extends any[] = [undefined, ...T]> = Omit<C, keyof C[] | (TupleOmit extends keyof C ? TupleOmit : never)>;
type Arguments<T extends Array<unknown>> = TupleToObject<[...T, undefined?]>;

type StateOrLiteral<T> = State<T> | T;
type InitialState<T extends Record<string, unknown>> = {
	[P in keyof T]?: StateOrLiteral<T[P]>;
};
