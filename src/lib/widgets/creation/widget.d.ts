import { Stateify } from "../../..";
import { UnknownDeclaration } from "../unknown";
import { WidgetDeclaration } from "./utils";

type Widget<T extends WidgetDeclaration = UnknownDeclaration> = {
	ID: string;
	type: string;
	state: T["State"] extends object ? Stateify<T["State"]> : undefined;

	parentWidget: Widget;
	Instance: GuiObject;
	arguments: T["Arguments"];

	ZIndex: number;

	trackedEvents: {};
	lastCycleTick: number;
} & T["Events"];

type ParentWidget<T extends WidgetDeclaration = UnknownDeclaration> = Widget<T> & {
	ChildContainer: GuiObject;
	ZOffset: number;
	ZUpdate: boolean;
};

type TabWidget<T extends WidgetDeclaration = UnknownDeclaration> = ParentWidget<T> & {
	parentWidget: TabBarWidget;
	Index: number;
	ButtonColors: Record<string, Color3 | number>;
};

type TabBarWidget<T extends WidgetDeclaration = UnknownDeclaration> = ParentWidget<T> & {
	Tabs: Array<TabWidget>;
};
