# Test package to deploy to NPM

## Example

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'brn-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, count, isMaxCountReached, increaseBy }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
