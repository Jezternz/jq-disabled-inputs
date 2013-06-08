jq-disabled-inputs
==================

This plugin simply makes it so .val(), .serialize() and .serializeArray() jquery methods will reliably return values even when disabled. This means you can disable forms of inputs, and still recieve all their values.

*Note this will not work only for elements disabled using .attr() or .prop()
