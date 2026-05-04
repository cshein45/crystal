---
"tamedevil": patch
---

Fix a security issue in `te.substring` when handling specially crafted input. We
are not aware of any Graphile software being affected by this issue, though
other uses of `tamedevil` may be impacted. We recommend upgrading as a
precaution.

Thanks to @aslein1413-sys for responsibly reporting this issue.
