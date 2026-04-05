export const cheatsheetData = [
  {
    id: "lists",
    title: "Lists",
    tag: "Mutable Sequence",
    description: "Ordered, mutable sequences. The most versatile Python data structure.",
    subsections: [
      {
        id: "list-append",
        title: "append(x)",
        desc: "Add item `x` to the end of the list. Modifies in place, returns `None`.",
        code: `x = "cherry"
fruits = ["apple", "banana"]
fruits.append(x)
# ['apple', 'banana', 'cherry']`
      },
      {
        id: "list-extend",
        title: "extend(iterable)",
        desc: "Append all items from `iterable` to the list.",
        code: `a = [1, 2]
extra = [3, 4]
a.extend(extra)
# [1, 2, 3, 4]`
      },
      {
        id: "list-insert",
        title: "insert(i, x)",
        desc: "Insert item `x` at position `i`. Elements from `i` onward shift right.",
        code: `nums = [1, 3, 4]
i, x = 1, 2
nums.insert(i, x)
# [1, 2, 3, 4]`
      },
      {
        id: "list-remove",
        title: "remove(x)",
        desc: "Remove the first occurrence of `x`. Raises `ValueError` if not found.",
        code: `x = "a"
items = ["a", "b", "a"]
items.remove(x)
# ['b', 'a']`
      },
      {
        id: "list-pop",
        title: "pop([i])",
        desc: "Remove and return item at index `i` (default: last item). Raises `IndexError` if empty or index out of range.",
        code: `stack = [10, 20, 30]
last = stack.pop()       # 30
i = 0
first = stack.pop(i)     # 10
# stack → [20]`
      },
      {
        id: "list-clear",
        title: "clear()",
        desc: "Remove all items from the list. Equivalent to `del a[:]`.",
        code: `data = [1, 2, 3]
data.clear()
# []`
      },
      {
        id: "list-index",
        title: "index(x[, start[, end]])",
        desc: "Return index of first occurrence of `x`. Optional `start`/`end` narrow the search. Raises `ValueError` if not found.",
        code: `x = "b"
letters = ["a", "b", "c", "b"]
letters.index(x)          # 1
start = 2
letters.index(x, start)   # 3  (search from index 2)`
      },
      {
        id: "list-count",
        title: "count(x)",
        desc: "Return the number of occurrences of `x` in the list.",
        code: `x = 2
nums = [1, 2, 2, 3, 2]
nums.count(x)   # 3`
      },
      {
        id: "list-sort",
        title: "sort(*, key=None, reverse=False)",
        desc: "Sort the list in place. Use `key` for custom sort order. Returns `None`.",
        code: `words = ["banana", "apple", "cherry"]
words.sort()                     # alphabetical
words.sort(key=len)              # by length
words.sort(reverse=True)         # descending`
      },
      {
        id: "list-reverse",
        title: "reverse()",
        desc: "Reverse the list in place. Returns `None`.",
        code: `nums = [1, 2, 3]
nums.reverse()
# [3, 2, 1]`
      },
      {
        id: "list-copy",
        title: "copy()",
        desc: "Return a shallow copy of the list. Equivalent to `a[:]`.",
        code: `original = [1, [2, 3]]
clone = original.copy()
clone[0] = 99
# original unchanged: [1, [2, 3]]
# but clone[1] is same reference as original[1]`
      },
      {
        id: "list-slicing",
        title: "Slicing — list[start:stop:step]",
        desc: "Extract a sub-list. `start` is inclusive, `stop` is exclusive. All three are optional.",
        code: `a = [0, 1, 2, 3, 4, 5]
a[1:4]       # [1, 2, 3]
a[::2]       # [0, 2, 4]        every 2nd element
a[::-1]      # [5, 4, 3, 2, 1, 0]  reversed
a[-3:]       # [3, 4, 5]        last 3
a[1:-1]      # [1, 2, 3, 4]     trim first & last`
      },
      {
        id: "list-negative-indices",
        title: "Negative Indices",
        desc: "`-1` is the last element, `-2` the second-to-last, etc.",
        code: `colors = ["red", "green", "blue"]
colors[-1]    # 'blue'
colors[-2]    # 'green'`
      }
    ]
  },
    {
    id: "dictionaries",
    title: "Dictionaries",
    tag: "Key-Value Mapping",
    description: "Mutable key-value mappings. Python's most important data structure for structured data.",
    subsections: [
      {
        id: "dict-creation",
        title: "Creation",
        desc: "Create dicts with `{}` literals, `dict()` constructor, or `dict.fromkeys()`.",
        code: `# Literal
d = {"name": "Alice", "age": 30}

# dict() constructor
d = dict(name="Alice", age=30)
d = dict([("a", 1), ("b", 2)])

# fromkeys — same value for all keys
keys = ["x", "y", "z"]
d = dict.fromkeys(keys, 0)
# {'x': 0, 'y': 0, 'z': 0}`
      },
      {
        id: "dict-access",
        title: "Accessing Values — [] · get()",
        desc: "`d[key]` raises `KeyError` if missing. `get(key, default)` returns a default instead.",
        code: `d = {"name": "Alice", "age": 30}

d["name"]            # 'Alice'
# d["email"]         # KeyError

# get() — safe access with default
key = "email"
d.get(key)           # None
d.get(key, "N/A")    # 'N/A'`
      },
      {
        id: "dict-setdefault",
        title: "setdefault(key, default)",
        desc: "Return the value if `key` exists. Otherwise, insert `key` with `default` and return it.",
        code: `d = {"a": 1}

d.setdefault("a", 99)   # 1      (key exists, no change)
d.setdefault("b", 99)   # 99     (key inserted)
# d → {'a': 1, 'b': 99}`
      },
      {
        id: "dict-update",
        title: "Adding / Updating — [] · update() · |=",
        desc: "Assign with `[]`, merge with `update()`, or use `|=` (Python 3.9+).",
        code: `d = {"a": 1}

# Direct assignment
d["b"] = 2            # {'a': 1, 'b': 2}
d["a"] = 99           # {'a': 99, 'b': 2}

# update() — merge another dict
d.update({"c": 3, "a": 1})
# {'a': 1, 'b': 2, 'c': 3}

# |= operator (Python 3.9+)
d |= {"d": 4}

# | operator — creates new dict (Python 3.9+)
merged = {"a": 1} | {"b": 2}
# {'a': 1, 'b': 2}`
      },
      {
        id: "dict-del",
        title: "del statement",
        desc: "Remove a key-value pair by key. Raises `KeyError` if the key doesn't exist.",
        code: `d = {"a": 1, "b": 2, "c": 3}
del d["b"]
# {'a': 1, 'c': 3}

# del d["z"]  # KeyError: 'z'`
      },
      {
        id: "dict-pop",
        title: "pop(key[, default])",
        desc: "Remove and return value for `key`. If `key` is missing, return `default` or raise `KeyError`.",
        code: `d = {"a": 1, "b": 2, "c": 3}

key = "b"
val = d.pop(key)       # 2, d → {'a': 1, 'c': 3}

# With default
d.pop("z", "missing")  # 'missing' (no error)

# Without default
# d.pop("z")           # KeyError`
      },
      {
        id: "dict-popitem",
        title: "popitem()",
        desc: "Remove and return the last inserted key-value pair as a tuple. Raises `KeyError` if empty.",
        code: `d = {"a": 1, "b": 2, "c": 3}

item = d.popitem()   # ('c', 3)
# d → {'a': 1, 'b': 2}`
      },
      {
        id: "dict-clear",
        title: "clear()",
        desc: "Remove all items from the dictionary.",
        code: `d = {"a": 1, "b": 2}
d.clear()
# {}`
      },
      {
        id: "dict-keys-values-items",
        title: "keys() · values() · items()",
        desc: "Return dynamic view objects of keys, values, or key-value pairs.",
        code: `d = {"a": 1, "b": 2, "c": 3}

d.keys()     # dict_keys(['a', 'b', 'c'])
d.values()   # dict_values([1, 2, 3])
d.items()    # dict_items([('a', 1), ('b', 2), ('c', 3)])

# Views are dynamic — reflect changes
k = d.keys()
d["d"] = 4
# k now includes 'd'`
      },
      {
        id: "dict-iteration",
        title: "Iteration",
        desc: "Loop over keys (default), values, or key-value pairs.",
        code: `d = {"a": 1, "b": 2, "c": 3}

# Over keys (default)
for key in d:
    print(key)         # a, b, c

# Over values
for val in d.values():
    print(val)         # 1, 2, 3

# Over key-value pairs
for key, val in d.items():
    print(f"{key}: {val}")`
      },
      {
        id: "dict-membership",
        title: "Membership Testing — in",
        desc: "Check if a key exists in the dict. Use `in` on `values()` to check values.",
        code: `d = {"a": 1, "b": 2}

"a" in d            # True  (checks keys)
"z" in d            # False
2 in d.values()     # True  (checks values)`
      },
      {
        id: "dict-copy",
        title: "copy() · Deep Copy",
        desc: "`copy()` makes a shallow copy. Use `copy.deepcopy()` for nested structures.",
        code: `d = {"a": [1, 2]}

# Shallow copy
clone = d.copy()
clone["a"].append(3)
# d["a"] is also [1, 2, 3] — shared reference!

# Deep copy
from copy import deepcopy
clone = deepcopy(d)
clone["a"].append(4)
# d["a"] is still [1, 2, 3]`
      },
      {
        id: "dict-comprehension",
        title: "Dict Comprehension",
        desc: "Create dicts inline with `{key: value for ...}`. Supports filtering.",
        code: `# Basic
{x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Invert a dict
original = {"a": 1, "b": 2}
{v: k for k, v in original.items()}
# {1: 'a', 2: 'b'}

# Filter
{k: v for k, v in original.items() if v > 1}
# {'b': 2}`
      },
      {
        id: "dict-defaultdict",
        title: "defaultdict",
        desc: "A dict subclass that provides a default value for missing keys. From `collections`.",
        code: `from collections import defaultdict

# Default int (0)
counts = defaultdict(int)
for ch in "hello":
    counts[ch] += 1
# {'h': 1, 'e': 1, 'l': 2, 'o': 1}

# Default list
groups = defaultdict(list)
pairs = [("fruit", "apple"), ("veg", "carrot"), ("fruit", "banana")]
for category, item in pairs:
    groups[category].append(item)
# {'fruit': ['apple', 'banana'], 'veg': ['carrot']}`
      },
      {
        id: "dict-counter",
        title: "Counter",
        desc: "A dict subclass for counting hashable objects. From `collections`.",
        code: `from collections import Counter

c = Counter("abracadabra")
# Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})

c.most_common(2)    # [('a', 5), ('b', 2)]
c["a"]              # 5
c["z"]              # 0  (missing keys return 0)

# Arithmetic
c1 = Counter(a=3, b=1)
c2 = Counter(a=1, b=2)
c1 + c2   # Counter({'a': 4, 'b': 3})
c1 - c2   # Counter({'a': 2})`
      },
      {
        id: "dict-nested",
        title: "Nested Dicts",
        desc: "Dicts can contain other dicts for hierarchical data.",
        code: `users = {
    "alice": {"age": 30, "email": "alice@example.com"},
    "bob":   {"age": 25, "email": "bob@example.com"},
}

users["alice"]["age"]        # 30
users["alice"]["phone"] = "555-0001"

# Safe nested access
users.get("charlie", {}).get("age", "unknown")
# 'unknown'`
      }
    ]
  },
  {
    id: "strings",
    title: "Strings",
    tag: "Immutable Text",
    description: "Text data in Python — methods, features, formatting, and manipulation.",
    children: [
      {
        id: "string-methods",
        title: "String Methods",
        tag: "Transformation",
        description: "Built-in methods for transforming, searching, and formatting strings.",
        subsections: [
          {
            id: "str-upper",
            title: "upper()",
            desc: "Return a copy with all characters converted to uppercase.",
            code: `s = "hello world"
s.upper()   # 'HELLO WORLD'`
          },
          {
            id: "str-lower",
            title: "lower()",
            desc: "Return a copy with all characters converted to lowercase.",
            code: `s = "HELLO WORLD"
s.lower()   # 'hello world'`
          },
          {
            id: "str-title",
            title: "title()",
            desc: "Return a copy with the first letter of each word capitalized.",
            code: `s = "hello world"
s.title()   # 'Hello World'

# Gotcha: title() capitalizes after ANY non-alpha char
"they're cool".title()   # "They'Re Cool"  (not ideal)`
          },
          {
            id: "str-capitalize",
            title: "capitalize()",
            desc: "Return a copy with only the first character capitalized and the rest lowered.",
            code: `s = "hELLO wORLD"
s.capitalize()   # 'Hello world'

# Only affects the very first character
"hello".capitalize()    # 'Hello'
"HELLO".capitalize()    # 'Hello'`
          },
          {
            id: "str-swapcase",
            title: "swapcase()",
            desc: "Return a copy with uppercase characters converted to lowercase and vice versa.",
            code: `s = "Hello World"
s.swapcase()   # 'hELLO wORLD'`
          },
          {
            id: "str-strip",
            title: "strip() · lstrip() · rstrip()",
            desc: "Remove leading/trailing whitespace (or specified characters).",
            code: `s = "  hello  "
s.strip()        # 'hello'
s.lstrip()       # 'hello  '
s.rstrip()       # '  hello'

chars = "xxhelloxx"
chars.strip("x")  # 'hello'`
          },
          {
            id: "str-split",
            title: "split(sep=None, maxsplit=-1)",
            desc: "Split a string into a list by a separator. Defaults to splitting on whitespace.",
            code: `s = "one,two,three"
s.split(",")       # ['one', 'two', 'three']

# With max splits
s.split(",", 1)    # ['one', 'two,three']

# Default: split on whitespace, collapse multiple spaces
"a b  c".split()   # ['a', 'b', 'c']`
          },
          {
            id: "str-join",
            title: "join(iterable)",
            desc: "Concatenate an iterable of strings using the string as a separator.",
            code: `parts = ["one", "two", "three"]
sep = "-"
sep.join(parts)     # 'one-two-three'

", ".join(["a", "b", "c"])  # 'a, b, c'
"".join(["h", "i"])         # 'hi'`
          },
          {
            id: "str-replace",
            title: "replace(old, new[, count])",
            desc: "Replace occurrences of `old` with `new`. Optional `count` limits replacements.",
            code: `s = "aabbcc"
old, new = "b", "X"
s.replace(old, new)         # 'aaXXcc'

count = 1
s.replace(old, new, count)  # 'aaXbcc'  (only first)`
          },
          {
            id: "str-find",
            title: "find(sub[, start[, end]])",
            desc: "Return the lowest index where `sub` is found, or `-1` if not found. Does not raise an error.",
            code: `s = "hello world hello"
sub = "hello"
s.find(sub)       # 0
s.find(sub, 1)    # 12  (search from index 1)
s.find("xyz")     # -1  (not found)`
          },
          {
            id: "str-index",
            title: "index(sub[, start[, end]])",
            desc: "Like `find()`, but raises `ValueError` if `sub` is not found.",
            code: `s = "hello world"
sub = "world"
s.index(sub)      # 6

# s.index("xyz")  # ValueError: substring not found`
          },
          {
            id: "str-rfind-rindex",
            title: "rfind() · rindex()",
            desc: "Like `find`/`index` but search from the right (return highest index).",
            code: `s = "hello world hello"
s.rfind("hello")    # 12
s.rindex("hello")   # 12
s.rfind("xyz")      # -1`
          },
          {
            id: "str-startswith",
            title: "startswith(prefix)",
            desc: "Return `True` if the string starts with `prefix`. Accepts a tuple for multiple prefixes.",
            code: `filename = "report.pdf"
filename.startswith("report")       # True
filename.startswith(("rep", "doc")) # True (tuple check)`
          },
          {
            id: "str-endswith",
            title: "endswith(suffix)",
            desc: "Return `True` if the string ends with `suffix`. Accepts a tuple for multiple suffixes.",
            code: `filename = "report.pdf"
filename.endswith(".pdf")            # True
filename.endswith((".pdf", ".doc"))  # True`
          },
          {
            id: "str-format",
            title: "format() · f-strings",
            desc: "String formatting with placeholders. F-strings (Python 3.6+) are the modern standard.",
            code: `name, age = "Alice", 30

# f-strings (preferred)
f"Name: {name}, Age: {age}"

# .format()
"Name: {}, Age: {}".format(name, age)
"Name: {n}, Age: {a}".format(n=name, a=age)

# Format specifiers
pi = 3.14159
f"{pi:.2f}"       # '3.14'
f"{1000000:,}"    # '1,000,000'
f"{'hi':>10}"     # '        hi'  (right-align)`
          },
          {
            id: "str-count",
            title: "count(sub)",
            desc: "Return the number of non-overlapping occurrences of `sub`.",
            code: `s = "banana"
sub = "an"
s.count(sub)   # 2

sub = "a"
s.count(sub)   # 3`
          },
          {
            id: "str-isdigit",
            title: "isdigit()",
            desc: "Return `True` if all characters are digits.",
            code: `"123".isdigit()    # True
"12.3".isdigit()   # False
"".isdigit()       # False`
          },
          {
            id: "str-isalpha",
            title: "isalpha()",
            desc: "Return `True` if all characters are alphabetic.",
            code: `"abc".isalpha()      # True
"abc123".isalpha()   # False
"".isalpha()         # False`
          },
          {
            id: "str-isalnum",
            title: "isalnum()",
            desc: "Return `True` if all characters are alphanumeric (letters or digits).",
            code: `"abc123".isalnum()   # True
"abc 123".isalnum()  # False (space)
"".isalnum()         # False`
          },
          {
            id: "str-isspace",
            title: "isspace()",
            desc: "Return `True` if all characters are whitespace.",
            code: `"   ".isspace()      # True
"\\t\\n".isspace()     # True
"".isspace()         # False`
          }
        ]
      },
      {
        id: "string-features",
        title: "String Features",
        tag: "Syntax & Behavior",
        description: "Core string behaviors: slicing, concatenation, immutability, raw strings, and more.",
        subsections: [
          {
            id: "str-slicing",
            title: "Slicing",
            desc: "Strings support the same slice syntax as lists: `s[start:stop:step]`.",
            code: `s = "Python"
s[0:3]      # 'Pyt'
s[::-1]     # 'nohtyP'   (reversed)
s[-3:]      # 'hon'
s[::2]      # 'Pto'`
          },
          {
            id: "str-concat-repeat",
            title: "Concatenation · Repetition",
            desc: "`+` concatenates, `*` repeats. Both create new strings.",
            code: `a, b = "Hello", " World"
a + b          # 'Hello World'

sep = "-"
sep * 20       # '--------------------'

# Implicit concatenation (adjacent literals only)
s = "Hello" " " "World"   # 'Hello World'`
          },
          {
            id: "str-multiline",
            title: "Multiline Strings",
            desc: "Triple quotes for multiline. Preserves newlines and indentation.",
            code: `text = """Line one
Line two
Line three"""

# Or with single quotes
text = '''
First line
Second line
'''`
          },
          {
            id: "str-raw",
            title: "Raw Strings",
            desc: "Prefix with `r` to treat backslashes as literal characters. Useful for regex and file paths.",
            code: `# Normal string
path = "C:\\\\Users\\\\name"   # C:\\Users\\name

# Raw string — backslashes are literal
path = r"C:\\Users\\name"    # C:\\Users\\name

import re
pattern = r"\\d+\\.\\d+"       # regex for decimal numbers`
          },
          {
            id: "str-escape",
            title: "Escape Characters",
            desc: "Special characters using backslash notation.",
            code: `"\\n"     # newline
"\\t"     # tab
"\\\\"     # literal backslash
"\\""     # double quote inside double-quoted string
"\\'"     # single quote
"\\0"     # null character`
          },
          {
            id: "str-immutability",
            title: "Immutability",
            desc: "Strings cannot be modified in place. Operations always return new strings.",
            code: `s = "hello"
# s[0] = "H"   # TypeError!

# Instead, create a new string:
s = "H" + s[1:]   # 'Hello'

# Or use replace:
s = s.replace("h", "H")  # 'Hello'`
          }
        ]
      }
    ]
  },
  {
    id: "tuples",
    title: "Tuples",
    tag: "Immutable Sequence",
    description: "Ordered, immutable sequences. Used for fixed collections and multiple return values.",
    subsections: [
      {
        id: "tuple-creation",
        title: "Creation",
        desc: "Tuples are created with parentheses or just commas. A single-element tuple needs a trailing comma.",
        code: `t = (1, 2, 3)
t2 = 1, 2, 3           # parentheses optional
single = (42,)          # trailing comma required!
empty = ()
from_iter = tuple([1, 2])  # from iterable`
      },
      {
        id: "tuple-immutability",
        title: "Immutability",
        desc: "Tuples cannot be modified after creation. Attempting to assign raises `TypeError`.",
        code: `t = (1, 2, 3)
# t[0] = 99  → TypeError

# But mutable objects INSIDE a tuple can change:
t = ([1, 2],)
t[0].append(3)   # OK → ([1, 2, 3],)`
      },
      {
        id: "tuple-unpacking",
        title: "Unpacking",
        desc: "Assign tuple elements to variables. Number of variables must match unless using `*`.",
        code: `point = (10, 20, 30)
x, y, z = point          # x=10, y=20, z=30

# Swap trick
a, b = b, a

# Ignore values with _
_, y, _ = point           # only care about y`
      },
      {
        id: "tuple-star-unpacking",
        title: "* (Star) Unpacking",
        desc: "Use `*name` to capture remaining elements as a list.",
        code: `first, *rest = (1, 2, 3, 4, 5)
# first = 1, rest = [2, 3, 4, 5]

first, *mid, last = (1, 2, 3, 4, 5)
# first = 1, mid = [2, 3, 4], last = 5

*head, tail = (1, 2, 3)
# head = [1, 2], tail = 3`
      },
      {
        id: "tuple-namedtuple",
        title: "Named Tuples",
        desc: "Lightweight immutable objects with named fields. Access by name or index.",
        code: `from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p = Point(3, 7)
p.x           # 3
p[1]          # 7
x, y = p      # unpack like a regular tuple

# With defaults (Python 3.6.1+)
Point3D = namedtuple("Point3D", "x y z", defaults=[0])
Point3D(1, 2)  # Point3D(x=1, y=2, z=0)

# _asdict(), _replace()
p._asdict()           # {'x': 3, 'y': 7}
p._replace(x=99)      # Point(x=99, y=7)  — new instance`
      }
    ]
  },
  {
    id: "sets",
    title: "Sets",
    tag: "Unordered · Unique",
    description: "Unordered collections of unique elements. Fast membership testing.",
    subsections: [
      {
        id: "set-creation",
        title: "Creation",
        desc: "Sets are unordered collections of unique elements. Use `set()` for empty sets (not `{}`, that's a dict).",
        code: `s = {1, 2, 3}
empty = set()             # NOT {} (that's a dict)
from_list = set([1, 2, 2, 3])  # {1, 2, 3} — dupes removed
from_str = set("hello")  # {'h', 'e', 'l', 'o'}`
      },
      {
        id: "set-add",
        title: "add(x)",
        desc: "Add element `x` to the set. No effect if `x` is already present.",
        code: `s = {1, 2, 3}
x = 4
s.add(x)      # {1, 2, 3, 4}
s.add(2)      # {1, 2, 3, 4}  — no duplicate`
      },
      {
        id: "set-discard",
        title: "discard(x)",
        desc: "Remove element `x` if present. Does nothing if `x` is not in the set (no error).",
        code: `s = {1, 2, 3}
x = 2
s.discard(x)    # {1, 3}
s.discard(99)   # no error — still {1, 3}`
      },
      {
        id: "set-remove",
        title: "remove(x)",
        desc: "Remove element `x`. Raises `KeyError` if `x` is not present.",
        code: `s = {1, 2, 3}
x = 2
s.remove(x)     # {1, 3}
# s.remove(99)  # KeyError: 99`
      },
      {
        id: "set-pop",
        title: "pop()",
        desc: "Remove and return an arbitrary element. Raises `KeyError` if the set is empty.",
        code: `s = {1, 2, 3}
val = s.pop()   # removes & returns arbitrary element
# s is now a 2-element set`
      },
      {
        id: "set-operations",
        title: "union | intersection | difference",
        desc: "Combine sets using methods or operators. Methods accept any iterable; operators require sets.",
        code: `a = {1, 2, 3}
b = {3, 4, 5}

# Union — all elements from both
a | b              # {1, 2, 3, 4, 5}
a.union(b)         # same

# Intersection — elements in both
a & b              # {3}
a.intersection(b)  # same

# Difference — in a but not in b
a - b              # {1, 2}
a.difference(b)    # same

# Symmetric difference — in a or b but not both
a ^ b                       # {1, 2, 4, 5}
a.symmetric_difference(b)   # same`
      },
      {
        id: "set-inplace",
        title: "In-Place Operations (update)",
        desc: "Modify the set in place with `|=`, `&=`, `-=`, `^=` or method equivalents.",
        code: `a = {1, 2, 3}
a |= {4, 5}                  # a.update({4, 5})
a &= {2, 3, 4}               # a.intersection_update({2,3,4})
a -= {3}                      # a.difference_update({3})
a ^= {1, 2, 5}               # a.symmetric_difference_update(…)`
      },
      {
        id: "set-subset-superset",
        title: "Subset · Superset · Disjoint",
        desc: "Check relationships between sets.",
        code: `a = {1, 2}
b = {1, 2, 3}

a.issubset(b)      # True   (a <= b)
b.issuperset(a)    # True   (b >= a)
a.isdisjoint({9})   # True   (no common elements)

# Strict subset/superset (proper)
a < b              # True   (subset but not equal)
b > a              # True`
      },
      {
        id: "set-frozenset",
        title: "Frozen Sets",
        desc: "`frozenset` is an immutable set — can be used as a dict key or inside another set.",
        code: `fs = frozenset([1, 2, 3])
# fs.add(4) → AttributeError
# supports all non-mutating operations: |, &, -, ^

# Use as dict key
d = {fs: "value"}`
      }
    ]
  },
{
    id: "args-kwargs",
    title: "*args & **kwargs",
    tag: "Variadic Arguments",
    description: "Accept and pass variable numbers of positional and keyword arguments.",
    subsections: [
      {
        id: "args-positional",
        title: "*args — Variable Positional Arguments",
        desc: "`*args` collects extra positional arguments into a tuple.",
        code: `def add_all(*args):
    return sum(args)

add_all(1, 2, 3)       # 6
add_all(10, 20)        # 30
add_all()              # 0  (args is empty tuple)`
      },
      {
        id: "kwargs-keyword",
        title: "**kwargs — Variable Keyword Arguments",
        desc: "`**kwargs` collects extra keyword arguments into a dict.",
        code: `def greet(**kwargs):
    for key, val in kwargs.items():
        print(f"{key} = {val}")

greet(name="Alice", age=30)
# name = Alice
# age = 30`
      },
      {
        id: "args-combining",
        title: "Combining with Positional Args",
        desc: "Parameter order: positional → `*args` → keyword → `**kwargs`.",
        code: `def func(a, b, *args, key="default", **kwargs):
    print(a, b, args, key, kwargs)

func(1, 2, 3, 4, key="X", extra=99)
# 1  2  (3, 4)  X  {'extra': 99}`
      },
      {
        id: "args-unpacking",
        title: "Unpacking in Function Calls",
        desc: "Use `*` to unpack a list/tuple as positional args, `**` to unpack a dict as keyword args.",
        code: `def pos(a, b, c):
    return a + b + c

args = [1, 2, 3]
pos(*args)              # 6

kwargs = {"a": 10, "b": 20, "c": 30}
pos(**kwargs)           # 60

# Combine both:
pos(*[1], **{"b": 2, "c": 3})  # 6`
      }
    ]
  },
  {
    id: "lambda",
    title: "Lambda Functions",
    tag: "Anonymous",
    description: "Single-expression anonymous functions for quick inline operations.",
    subsections: [
      {
        id: "lambda-syntax",
        title: "Syntax",
        desc: "A `lambda` is an anonymous, single-expression function. It returns the expression's value automatically.",
        code: `# Syntax: lambda parameters: expression
square = lambda x: x ** 2
square(5)    # 25

add = lambda a, b: a + b
add(3, 4)    # 7

# With default values
greet = lambda name, greeting="Hello": f"{greeting}, {name}!"
greet("Alice")                # 'Hello, Alice!'`
      },
      {
        id: "lambda-use-cases",
        title: "Common Use Cases",
        desc: "Lambdas shine as short callbacks, sort keys, and quick transformations.",
        code: `# Sort key
pairs = [(1, "b"), (3, "a"), (2, "c")]
sorted(pairs, key=lambda p: p[1])
# [(3, 'a'), (1, 'b'), (2, 'c')]

# Inline with map/filter
list(map(lambda x: x * 2, [1, 2, 3]))   # [2, 4, 6]

# Conditional expression
classify = lambda n: "even" if n % 2 == 0 else "odd"`
      },
      {
        id: "lambda-limitations",
        title: "Limitations vs def",
        desc: "Lambdas are restricted to a single expression — no statements, no annotations, no docstrings.",
        code: `# ❌ Cannot use statements:
#   lambda x: if x > 0: return x    ← SyntaxError
#   lambda x: x = 10                ← SyntaxError

# ✅ Use def instead when you need:
#   - Multiple statements or lines
#   - Type annotations
#   - Docstrings
#   - Complex logic with loops / try-except
#   - A meaningful name for stack traces

# Lambda names in tracebacks show as "<lambda>"
# def functions show their actual name`
      }
    ]
  },
  {
    id: "map-filter-reduce",
    title: "map() · filter() · reduce()",
    tag: "Functional",
    description: "Functional programming tools for transforming and aggregating iterables.",
    subsections: [
      {
        id: "map-func",
        title: "map(func, iterable)",
        desc: "Apply `func` to every item. Returns a lazy iterator — wrap in `list()` to materialize.",
        code: `nums = [1, 2, 3, 4]
squares = list(map(lambda x: x**2, nums))
# [1, 4, 9, 16]

# Equivalent comprehension:
[x**2 for x in nums]

# Multiple iterables
list(map(lambda a, b: a + b, [1, 2], [10, 20]))
# [11, 22]

# With named function
list(map(str.upper, ["hi", "there"]))
# ['HI', 'THERE']`
      },
      {
        id: "filter-func",
        title: "filter(func, iterable)",
        desc: "Keep items where `func(item)` is truthy. Pass `None` as func to filter falsy values.",
        code: `nums = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, nums))
# [2, 4, 6]

# Equivalent comprehension:
[x for x in nums if x % 2 == 0]

# Filter out falsy values
list(filter(None, [0, 1, "", "hi", None, 42]))
# [1, 'hi', 42]`
      },
      {
        id: "reduce-func",
        title: "reduce(func, iterable[, initializer])",
        desc: "Cumulatively apply `func(accumulator, item)` left-to-right, reducing to a single value. Must import from `functools`.",
        code: `from functools import reduce

# Sum (for illustration — use sum() in practice)
reduce(lambda acc, x: acc + x, [1, 2, 3, 4])
# ((1+2)+3)+4 = 10

# With initializer
reduce(lambda acc, x: acc + x, [1, 2, 3], 100)
# 106

# Find max (for illustration — use max() in practice)
reduce(lambda a, b: a if a > b else b, [3, 1, 4, 1, 5])
# 5

# Flatten nested lists
reduce(lambda acc, lst: acc + lst, [[1,2],[3],[4,5]], [])
# [1, 2, 3, 4, 5]`
      }
    ]
  },
  {
    id: "comprehensions",
    title: "Comprehensions",
    tag: "Expressive Syntax",
    description: "Concise syntax for creating lists, dicts, sets, and generators inline.",
    subsections: [
      {
        id: "comp-list",
        title: "List Comprehension",
        desc: "Create a new list by applying an expression to each item.",
        code: `# [expression for item in iterable]
squares = [x**2 for x in range(6)]
# [0, 1, 4, 9, 16, 25]`
      },
      {
        id: "comp-if",
        title: "Conditional — with if",
        desc: "Filter items with an `if` clause at the end.",
        code: `# [expression for item in iterable if condition]
evens = [x for x in range(10) if x % 2 == 0]
# [0, 2, 4, 6, 8]

# Multiple conditions (AND)
[x for x in range(20) if x % 2 == 0 if x % 3 == 0]
# [0, 6, 12, 18]`
      },
      {
        id: "comp-if-else",
        title: "Conditional — with if/else (Ternary)",
        desc: "Use the ternary expression before the `for`. This transforms, not filters.",
        code: `# [A if condition else B for item in iterable]
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
# ['even', 'odd', 'even', 'odd', 'even']`
      },
      {
        id: "comp-nested",
        title: "Nested Comprehension",
        desc: "Multiple `for` loops — reads left-to-right like nested loops.",
        code: `# Flatten a matrix
matrix = [[1,2], [3,4], [5,6]]
flat = [x for row in matrix for x in row]
# [1, 2, 3, 4, 5, 6]

# Equivalent to:
# for row in matrix:
#     for x in row:
#         flat.append(x)

# All pairs
[(x, y) for x in [1,2] for y in ["a","b"]]
# [(1,'a'), (1,'b'), (2,'a'), (2,'b')]`
      },
      {
        id: "comp-dict",
        title: "Dict Comprehension",
        desc: "Create dicts with `{key: value for ...}`.",
        code: `{x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Invert a dict
original = {"a": 1, "b": 2}
{v: k for k, v in original.items()}
# {1: 'a', 2: 'b'}

# With condition
{k: v for k, v in original.items() if v > 1}
# {'b': 2}`
      },
      {
        id: "comp-set",
        title: "Set Comprehension",
        desc: "Create sets with `{expression for ...}`.",
        code: `{x % 3 for x in range(10)}
# {0, 1, 2}

{len(w) for w in ["hi", "hello", "hey", "yo"]}
# {2, 5, 3}`
      },
      {
        id: "comp-generator",
        title: "Generator Expressions",
        desc: "Like list comps but with `()` instead of `[]`. Produces values lazily — memory efficient for large sequences.",
        code: `# Generator expression — lazy, single-use
gen = (x**2 for x in range(1000000))
next(gen)   # 0
next(gen)   # 1
sum(gen)    # consumes remaining

# Pass directly into functions (no extra parens needed)
sum(x**2 for x in range(10))  # 285
max(x * 2 for x in [3,1,4])  # 8

# Key difference from list comp:
#   list comp  → builds entire list in memory
#   gen expr   → yields one value at a time`
      }
    ]
  },
  {
    id: "generators",
    title: "Generators",
    tag: "Lazy Iteration",
    description: "Functions that yield values one at a time, enabling memory-efficient iteration.",
    subsections: [
      {
        id: "gen-yield-vs-return",
        title: "yield vs return",
        desc: "`yield` pauses the function and produces a value. The function resumes from where it left off on the next call to `next()`. `return` terminates the function entirely.",
        code: `def countdown(n):
    while n > 0:
        yield n
        n -= 1

gen = countdown(3)
next(gen)    # 3
next(gen)    # 2
next(gen)    # 1
# next(gen) → StopIteration

# Use in a for loop (handles StopIteration automatically)
for i in countdown(3):
    print(i)   # 3, 2, 1`
      },
      {
        id: "gen-functions",
        title: "Generator Functions",
        desc: "Any function with `yield` becomes a generator function. Calling it returns a generator object (does not execute the body immediately).",
        code: `def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib = fibonacci()
[next(fib) for _ in range(8)]
# [0, 1, 1, 2, 3, 5, 8, 13]

# Generators are single-use iterators
gen = (x for x in [1,2,3])
list(gen)   # [1, 2, 3]
list(gen)   # []  — already exhausted`
      },
      {
        id: "gen-next",
        title: "next() and StopIteration",
        desc: "`next(gen)` fetches the next yielded value. When the generator is exhausted, `StopIteration` is raised. Provide a default with `next(gen, default)`.",
        code: `gen = (chr(i) for i in range(65, 68))
next(gen)             # 'A'
next(gen)             # 'B'
next(gen)             # 'C'
next(gen, "done")     # 'done'  (default avoids StopIteration)`
      },
      {
        id: "gen-yield-from",
        title: "yield from",
        desc: "Delegate to a sub-generator or any iterable. Flattens nested generators cleanly.",
        code: `def flatten(nested):
    for item in nested:
        if isinstance(item, list):
            yield from flatten(item)
        else:
            yield item

list(flatten([1, [2, [3, 4]], 5]))
# [1, 2, 3, 4, 5]

# Chaining generators
def chain(*iterables):
    for it in iterables:
        yield from it

list(chain([1,2], [3,4], [5]))
# [1, 2, 3, 4, 5]`
      }
    ]
  },
  {
    id: "decorators",
    title: "Decorators",
    tag: "Metaprogramming",
    description: "Wrap functions to add behavior, logging, access control, and more.",
    subsections: [
      {
        id: "dec-basic",
        title: "Basic Decorator Pattern",
        desc: "A decorator wraps a function, adding behavior before/after it runs. It takes a function and returns a new function.",
        code: `def log_calls(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@log_calls
def add(a, b):
    return a + b

add(2, 3)
# Calling add
# add returned 5`
      },
      {
        id: "dec-wraps",
        title: "functools.wraps",
        desc: "Preserves the original function's `__name__`, `__doc__`, and other metadata. Always use it.",
        code: `from functools import wraps

def log_calls(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@log_calls
def greet(name):
    """Say hello."""
    return f"Hello, {name}!"

greet.__name__   # 'greet'  (not 'wrapper')
greet.__doc__    # 'Say hello.'`
      },
      {
        id: "dec-with-args",
        title: "Decorator with Arguments",
        desc: "Add an outer function layer to accept decorator parameters.",
        code: `from functools import wraps

def repeat(n):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def say_hi():
    print("Hi!")

say_hi()
# Hi!
# Hi!
# Hi!`
      },
      {
        id: "dec-stacking",
        title: "Stacking Decorators",
        desc: "Multiple decorators apply bottom-up — the closest to the function runs first.",
        code: `def bold(func):
    @wraps(func)
    def wrapper(*a, **kw):
        return "<b>" + func(*a, **kw) + "</b>"
    return wrapper

def italic(func):
    @wraps(func)
    def wrapper(*a, **kw):
        return "<i>" + func(*a, **kw) + "</i>"
    return wrapper

@bold
@italic
def hello():
    return "hello"

hello()
# '<b><i>hello</i></b>'

# Execution order: hello → italic(hello) → bold(italic(hello))
# Decorators are applied bottom-up, called top-down`
      }
    ]
  },
  {
    id: "file-handling",
    title: "File Handling",
    tag: "I/O",
    description: "Reading, writing, and managing files with Python's built-in I/O.",
    subsections: [
      {
        id: "file-open-modes",
        title: "open() and Modes",
        desc: "Open a file with a mode string. Always close files or use `with` statement.",
        code: `# Modes:
# 'r'  — read (default)
# 'w'  — write (truncates)
# 'a'  — append
# 'x'  — exclusive create (fails if exists)
# 'b'  — binary mode (add to above, e.g. 'rb')
# 't'  — text mode (default)
# '+'  — read and write (e.g. 'r+')

f = open("file.txt", "r")
content = f.read()
f.close()`
      },
      {
        id: "file-with",
        title: "Context Manager — with",
        desc: "The `with` statement auto-closes the file, even if an error occurs. Always preferred.",
        code: `with open("file.txt", "r") as f:
    content = f.read()
# f is automatically closed here

# Multiple files
with open("in.txt") as src, open("out.txt", "w") as dst:
    dst.write(src.read())`
      },
      {
        id: "file-reading",
        title: "Reading — read() · readline() · readlines()",
        desc: "Three ways to read file content: all at once, line by line, or as a list of lines.",
        code: `with open("file.txt") as f:
    # Read entire file as one string
    content = f.read()

    # Read one line at a time
    f.seek(0)
    line = f.readline()       # includes '\\n'

    # Read all lines as a list
    f.seek(0)
    lines = f.readlines()     # ['line1\\n', 'line2\\n', ...]

# Iterate line by line (memory efficient)
with open("file.txt") as f:
    for line in f:
        print(line.strip())`
      },
      {
        id: "file-writing",
        title: "Writing — write() · writelines()",
        desc: "`write()` writes a string. `writelines()` writes a list of strings. Neither adds newlines automatically.",
        code: `with open("output.txt", "w") as f:
    f.write("Hello\\n")
    f.write("World\\n")

# writelines — no automatic newlines
lines = ["line 1\\n", "line 2\\n", "line 3\\n"]
with open("output.txt", "w") as f:
    f.writelines(lines)

# Append mode
with open("log.txt", "a") as f:
    f.write("New entry\\n")`
      },
      {
        id: "file-seek-tell",
        title: "seek() · tell()",
        desc: "`tell()` returns current position. `seek(offset)` moves to a position.",
        code: `with open("file.txt", "r") as f:
    f.read(5)        # read first 5 chars
    pos = f.tell()   # 5
    f.seek(0)        # back to start
    f.read()         # read entire file again`
      },
      {
        id: "file-binary",
        title: "Binary Files",
        desc: "Use `'b'` mode for non-text files (images, PDFs, etc.). Data is `bytes`, not `str`.",
        code: `# Read binary
with open("image.png", "rb") as f:
    data = f.read()    # bytes object
    print(type(data))  # <class 'bytes'>

# Write binary
with open("copy.png", "wb") as f:
    f.write(data)`
      },
      {
        id: "file-pathlib",
        title: "pathlib — Modern Paths",
        desc: "`pathlib.Path` provides an object-oriented API for file system paths.",
        code: `from pathlib import Path

p = Path("data/report.txt")
p.name          # 'report.txt'
p.stem          # 'report'
p.suffix        # '.txt'
p.parent        # Path('data')
p.exists()      # True/False
p.is_file()     # True/False
p.is_dir()      # False

# Read/write shortcuts
text = p.read_text()
p.write_text("new content")

# Iterate directory
for f in Path(".").glob("*.py"):
    print(f)`
      },
      {
        id: "file-os-operations",
        title: "File Operations — os / shutil",
        desc: "Common file system operations: rename, delete, copy, check existence.",
        code: `import os
import shutil

os.path.exists("file.txt")      # True/False
os.path.isfile("file.txt")      # True
os.path.isdir("data/")          # True
os.path.getsize("file.txt")     # size in bytes

os.rename("old.txt", "new.txt")
os.remove("temp.txt")           # delete file
os.makedirs("a/b/c", exist_ok=True)

shutil.copy("src.txt", "dst.txt")
shutil.rmtree("old_dir/")       # delete directory tree`
      }
    ]
  },
  {
    id: "json",
    title: "JSON",
    tag: "Serialization",
    description: "Parse and produce JSON data for APIs, config files, and data exchange.",
    subsections: [
      {
        id: "json-dumps",
        title: "json.dumps() — Python → JSON String",
        desc: "Serialize a Python object to a JSON-formatted string.",
        code: `import json

data = {"name": "Alice", "age": 30, "scores": [95, 87]}
json_str = json.dumps(data)
# '{"name": "Alice", "age": 30, "scores": [95, 87]}'

# Pretty print
print(json.dumps(data, indent=2))
# {
#   "name": "Alice",
#   "age": 30,
#   "scores": [95, 87]
# }`
      },
      {
        id: "json-loads",
        title: "json.loads() — JSON String → Python",
        desc: "Deserialize a JSON string to a Python object.",
        code: `import json

json_str = '{"name": "Alice", "age": 30}'
data = json.loads(json_str)
# {'name': 'Alice', 'age': 30}

data["name"]   # 'Alice'
type(data)     # <class 'dict'>`
      },
      {
        id: "json-dump-file",
        title: "json.dump() — Write to File",
        desc: "Serialize Python object directly to a file.",
        code: `import json

data = {"users": ["Alice", "Bob"], "count": 2}

with open("data.json", "w") as f:
    json.dump(data, f, indent=2)`
      },
      {
        id: "json-load-file",
        title: "json.load() — Read from File",
        desc: "Deserialize JSON directly from a file object.",
        code: `import json

with open("data.json", "r") as f:
    data = json.load(f)

print(data["users"])   # ['Alice', 'Bob']`
      },
      {
        id: "json-type-mapping",
        title: "Type Mapping",
        desc: "JSON types map to Python types. Some Python types have no JSON equivalent.",
        code: `# JSON → Python:
# object    → dict
# array     → list
# string    → str
# number    → int / float
# true      → True
# false     → False
# null      → None

import json
json.loads('[1, 2.5, true, null, "hi"]')
# [1, 2.5, True, None, 'hi']`
      },
      {
        id: "json-options",
        title: "Formatting Options",
        desc: "Control output with `indent`, `sort_keys`, `separators`, `ensure_ascii`.",
        code: `import json

data = {"b": 2, "a": 1}

# Sort keys
json.dumps(data, sort_keys=True)
# '{"a": 1, "b": 2}'

# Compact output
json.dumps(data, separators=(",", ":"))
# '{"b":2,"a":1}'

# Allow non-ASCII
json.dumps({"emoji": "🐍"}, ensure_ascii=False)
# '{"emoji": "🐍"}'`
      },
      {
        id: "json-custom",
        title: "Custom Serialization",
        desc: "Handle non-serializable types with `default` parameter or a custom encoder.",
        code: `import json
from datetime import datetime

def custom_serializer(obj):
    if isinstance(obj, datetime):
        return obj.isoformat()
    raise TypeError(f"Not serializable: {type(obj)}")

data = {"event": "launch", "time": datetime.now()}
json.dumps(data, default=custom_serializer)
# '{"event": "launch", "time": "2024-01-15T10:30:00"}'`
      }
    ]
  },
  {
    id: "datetime",
    title: "datetime",
    tag: "Date & Time",
    description: "Work with dates, times, durations, formatting, and parsing.",
    subsections: [
      {
        id: "dt-date",
        title: "date Objects",
        desc: "Represent a calendar date (year, month, day). Immutable.",
        code: `from datetime import date

today = date.today()        # e.g. date(2024, 1, 15)
d = date(2024, 6, 15)

d.year       # 2024
d.month      # 6
d.day        # 15
d.weekday()  # 5 (Saturday, Monday=0)
d.isoformat()  # '2024-06-15'`
      },
      {
        id: "dt-time",
        title: "time Objects",
        desc: "Represent a time of day (hour, minute, second, microsecond).",
        code: `from datetime import time

t = time(14, 30, 45)
t.hour       # 14
t.minute     # 30
t.second     # 45
t.isoformat()  # '14:30:45'

# With microseconds
t = time(10, 0, 0, 123456)
# time(10, 0, 0, 123456)`
      },
      {
        id: "dt-datetime",
        title: "datetime Objects",
        desc: "Combine date and time into a single object. The most commonly used class.",
        code: `from datetime import datetime

now = datetime.now()          # current local datetime
utc = datetime.utcnow()       # current UTC

dt = datetime(2024, 6, 15, 14, 30, 0)
dt.year      # 2024
dt.hour      # 14
dt.date()    # date(2024, 6, 15)
dt.time()    # time(14, 30)

# From timestamp
dt = datetime.fromtimestamp(1700000000)

# From ISO string
dt = datetime.fromisoformat("2024-06-15T14:30:00")`
      },
      {
        id: "dt-timedelta",
        title: "timedelta — Duration",
        desc: "Represent a duration. Used for date arithmetic.",
        code: `from datetime import datetime, timedelta

now = datetime.now()

# Add / subtract
tomorrow = now + timedelta(days=1)
last_week = now - timedelta(weeks=1)
in_2_hours = now + timedelta(hours=2)

# Difference between datetimes
dt1 = datetime(2024, 6, 15)
dt2 = datetime(2024, 1, 1)
diff = dt1 - dt2
diff.days        # 166
diff.total_seconds()  # 14342400.0

# Create timedelta
td = timedelta(days=5, hours=3, minutes=30)
td.total_seconds()  # 442200.0`
      },
      {
        id: "dt-strftime",
        title: "strftime() — Formatting",
        desc: "Format a datetime to a string using format codes.",
        code: `from datetime import datetime

dt = datetime(2024, 6, 15, 14, 30, 0)

dt.strftime("%Y-%m-%d")          # '2024-06-15'
dt.strftime("%d/%m/%Y")          # '15/06/2024'
dt.strftime("%H:%M:%S")          # '14:30:00'
dt.strftime("%I:%M %p")          # '02:30 PM'
dt.strftime("%A, %B %d, %Y")    # 'Saturday, June 15, 2024'

# Common codes:
# %Y year  %m month  %d day
# %H hour(24)  %I hour(12)  %M min  %S sec
# %A weekday  %B month name  %p AM/PM`
      },
      {
        id: "dt-strptime",
        title: "strptime() — Parsing",
        desc: "Parse a string into a datetime object. The format must match exactly.",
        code: `from datetime import datetime

s = "2024-06-15 14:30:00"
dt = datetime.strptime(s, "%Y-%m-%d %H:%M:%S")
# datetime(2024, 6, 15, 14, 30)

s = "June 15, 2024"
dt = datetime.strptime(s, "%B %d, %Y")
# datetime(2024, 6, 15, 0, 0)

# Raises ValueError if format doesn't match
# datetime.strptime("2024/06/15", "%Y-%m-%d")  # ValueError`
      },
      {
        id: "dt-timezone",
        title: "Timezone Handling",
        desc: "Use `timezone` for UTC offsets. For named timezones, use `zoneinfo` (Python 3.9+).",
        code: `from datetime import datetime, timezone, timedelta

# UTC
utc_now = datetime.now(timezone.utc)

# Fixed offset
est = timezone(timedelta(hours=-5))
dt_est = datetime.now(est)

# zoneinfo (Python 3.9+)
from zoneinfo import ZoneInfo
dt_ny = datetime.now(ZoneInfo("America/New_York"))
dt_tokyo = datetime.now(ZoneInfo("Asia/Tokyo"))

# Convert between timezones
dt_utc = dt_ny.astimezone(timezone.utc)`
      }
    ]
  }
];
