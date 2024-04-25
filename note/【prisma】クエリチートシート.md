# prisma クエリチートシート

# findMany

一覧取得を行う FindMany

## 一覧取得

```typescript
prisma.user.findMany()

// 取得結果
// users: [{ ... }, { ... }]
```

## 絞り込み

```typescript
prisma.user.findMany({
  where: {
    name: '田中',
  }
})
```

### include (join) 先のフィールドでwhere

```typescript
prisma.user.findMany({
  where: {
    name: '田中',
  }
})
```

## Join

### user 1-N task でtaskをすべてネストさせて取得

```typescript
prisma.user.findMany({
  include: {
    tasks: true,
  }
})

// 取得結果
// users: [
//   {
//     name: '田中',
//     tasks: [{ ... }],
//   }
// ]
```

### user 1-N task, task N-N tag でtaskにtagもネストさせる

```typescript
prisma.user.findMany({
  include: {
    tasks: {
      include: {
        tags: true,
      }
    },
  }
})

// 取得結果
// users: [
//   {
//     name: '田中',
//     tasks: [{
//         tags: [{ ... }],
//     }]
//   }
// ]
```

# findOne



# create



# update


# delete

