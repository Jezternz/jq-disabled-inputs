(function ($)
{
    var oldval = $.fn.val;
    var enc = function(s){return encodeURIComponent(s).replace(/[%20]/gim, '+')};
    jQuery.fn.val = function(value)
    {
        if(this.prop('disabled')){
            if(typeof value == 'undefined'){
                return this.first().data('before-disabled-value');
            } else {
                this.first().data('before-disabled-value', value);
            }
        }
        return oldval.apply(this, arguments);
    }
    var oldProp = $.fn.prop;
    jQuery.fn.prop = function(name, value)
    {
        if(typeof value != 'undefined' && name == "disabled")
        {
            this.first().data('before-disabled-value', this.val());
        }
        return oldProp.apply(this, arguments);
    } 
    var oldAttr = $.fn.attr;
    jQuery.fn.attr = function(name, value)
    {
        if(typeof value != 'undefined' && name == "disabled")
        {
            this.first().data('before-disabled-value', this.val());
        }
        return oldAttr.apply(this, arguments);
    }
    var oldSerialize = $.fn.serialize;
    jQuery.fn.serialize = function()
    {
        var ret = oldSerialize.apply(this, arguments);
        this.find('input[disabled], textarea[disabled], select[disabled]').each(function(){
            if(ret.length!=0)ret += "&";
            ret += enc($(this).attr('name')) + "=" + enc($(this).data('before-disabled-value'));
        });
        return ret;
    }
    var oldSerializeArray = $.fn.serializeArray;
    jQuery.fn.serializeArray = function()
    {
        var ret = oldSerializeArray.apply(this, arguments);
        this.find('input[disabled], textarea[disabled], select[disabled]').each(function(){
            ret.push({
                'name':$(this).attr('name'),
                'value':$(this).data('before-disabled-value')
            });
        });
        return ret;
    }
})(jQuery);