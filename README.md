# TimeElement

A Javascript library, which you can use to turn UNIX timestamps into user-readable text, considering their timezone.

[[Examples]](https://netdexco.github.io/TimeElement/) [[Download]](https://raw.githubusercontent.com/netdexco/TimeElement/master/TimeElement.js)

## `calculateTimeElements([options])`

Calculates all time elements.

**Options:**

You can pass an object (`{}`) with any of these values in it:

- `year`: Formatting if timestamp's year is unequal to the current one. (Default: `{y}-{m}-{d}`
- `date`: Formatting if timestamp's year is equal to current one. (Default: `{m}-{d}`
- `time`: Time formatting. (Default: `{h}:{i}`)
- `datetime`: Formatting if both date and time are shown. (Default: `{date} {time}`)

## Attributes

- `data-time` specifies that this is a TimeElement and the value is the timestamp that is to be evaluated.
- `data-notime` specifies that only the date of the timestamp is to be shown.
- `data-datetime`  specifies that the time of the timestamp is to be shown even when it is 00:00
