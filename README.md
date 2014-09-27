JS-Utility
==========

JavaScript Array, String and Number utilities for common tasks

A library containing prototype extension methods for common tasks such as randomising an Array,
adding ordinal suffixes to numbers, splitting strings into name/value pairs and more.

Methods and Functions
---

###Array.prototype.shuffle

Shuffles an Array and returns it in random order. The original Array is affected.

###Array.prototype.last

Returns the last item in an array, or null if empty.

###Array.prototype.first

Returns the last item in an array, or null if empty.

###Array.prototype.each

If jQuery is present, binds the $.each method to Array so it is valid to call [].each(function(){}) to iterate over items.

###Array.prototype.random

Returns a single random element from an array.

###Array.prototype.remove

Pass one parameter to remove matching elements from the array. The original Array is altered by the operation.

E.g.:

<pre>[0,1,2,3,4].remove(1)</pre>

returns [0,2,3,4].

###Array.prototype.contains

Returns true if an array contains the passed value, false if not.

E.g.:

<pre>[0,1,2,3,4].contains(1)</pre>

returns true.

###String.prototype.addCommas, Number.prototype.addCommas

Formats a number as a comma-delimited string e.g. (51234).addCommas() returns "51,234".

###String.prototype.capitalize

Capitalises the first character of a string e.g. ("something").capitalize() returns "Something"

###String.prototype.camel

Turns an underscore case string into camel case. e.g. ("something_else").camel() returns "somethingElse".

###String.prototype.camel

Turns a camel case string into underscore case e.g. ("somethingElse").toUnderscore() returns "something_else".

###String.prototype.trim

If String.prototype.trim is not already supported by the browser it is added.

###Number.prototype.pad

Adds leading zeros to a number, to the number of digits specified, and returns a string. e.g. (5).pad(3) returns "005".

###Number.prototype.ordinal

Adds an ordinal suffix to a number e.g. (23).ordinal() returns the string "23rd".

###String.prototype.nameValuePairs

Converts an ampersand separated string, such as a query string, into name/value pairs e.g. ("this=that&foo=bar").nameValuePairs() returns the object {this:that,{foo:bar}].

###Object.create

If Object.create is unsupported by the browser it creates it.

###window.console

If window.console is undefined then this creates a dummy log function. This is to supresse debug messages that may accidentally be left in code.