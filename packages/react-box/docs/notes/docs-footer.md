# Box Footer

This component must be used as last component inside `<Box>` since it will add a top border that separates it from `<BoxBody />` and `<BoxSection />`. Commonly, designers use `<BoxFooter />` to place action buttons inside of it, like: save, next, edit, etc.

Content inside will be placed to left of the container but when wrapping it inside `<div className="sui-actions-right" />` the content will be placed at right of the container.