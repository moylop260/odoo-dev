openerp.account_analytic_plans = function(instance) {

var _t = instance.web._t,
    _lt = instance.web._lt;
var QWeb = instance.web.qweb;

instance.web.account.bankStatementReconciliation.include({

    init: function(parent, context) {
        this._super(parent, context);
        delete this.create_form_fields.analytic_account;
        this.create_form_fields["analytic_plan"] = {
            id: "analytic_plan",
            index: 4,
            corresponding_property: "analytics_id",
            label: _t("Analytic Distribution"),
            required: false,
            tabindex: 14,
            group: "analytic.group_analytic_accounting",
            constructor: instance.web.form.FieldMany2One,
            field_properties: {
                relation: "account.analytic.plan.instance",
                string: _t("Analytic Distribution"),
                type: "many2one",
            }
        };
    },

    start: function() {
        return this._super().then(function() {
        });
    },

});
};
