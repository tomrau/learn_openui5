sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
], function(Controller, MessageToast) {
    "use strict";

    return Controller.extend('sap.ui.rt.todolist.controller.Todolist', {
        addTodo: function(e) {
            let oView = this.getView();
            let textInput = oView.byId("todoInput");
            console.log(e);
            let value = e.getParameters().value;

            let todoText = oView.byId("todoText");
            todoText.setText(todoText.getText() + value + "\n");

            textInput.setValue('');

            MessageToast.show("Item added");
        }
    })
});