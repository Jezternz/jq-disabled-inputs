jq-disabled-inputs
==================

The Problem: When inputs are disabled, they do not return their values using .val() etc.

This plugin simply makes it so .val(), .serialize() and .serializeArray() jquery methods will return values even when disabled. This means you can disable single or groups of inputs, and still recieve all their values. See test.htm for example tests.

see file 'jq.disabled-inputs.js' for plugin.

*Note this will work only for elements disabled using .attr() or .prop()
