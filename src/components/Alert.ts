import { DOM, StatelessComponent } from "react";

export const Alert: StatelessComponent<{ message?: string }> = (props) =>
    props.message
        ? DOM.div({ className: "alert alert-danger widget-time-series-alert" }, props.message)
        : null as any;

Alert.displayName = "Alert";
