**There are some utility schemas for validation with yup with CORRECT TYPES.**

*First of all, the most wanted:*
### Typescript Enum Validation: 
```typescript
enum LangName {
	english='english',
	french='french',
}

/*
	1. createEnumSchema(Enum).optiona() -> Enum | undefined
*/
const goodLangName = 'english'
const badLangName = 'aaa'
const langName1 : LangName|undefined = await createEnumSchema(LangName).optional().validate(goodLangName)
// -> langName1: LangName.english
const langName2 : LangName|undefined  = await createEnumSchema(LangName).optional().validate(badLangName)
// -> langName2: undefined

/*
	2. createEnumSchema(Enum).required() -> Enum (throws validation error on invalid value)
*/
const goodLangName = 'english'
const badLangName = 'aaa'
const langName3 : LangName|undefined = await createEnumSchema(LangName).required().validate(goodLangName)
// -> langName3: LangName.english
const langName4 : LangName|undefined  = await createEnumSchema(LangName).required().validate(badLangName)
// -> Validation Error

/*
	3. createEnumSchema(Enum).withDefault(defaultValue) -> Enum 
*/
const goodLangName = 'english'
const badLangName = 'aaa'
const langName5 : LangName|undefined = await createEnumSchema(LangName).withDefault(LangName.french).validate(goodLangName)
// -> langName5: LangName.english
const langName6 : LangName|undefined  = await createEnumSchema(LangName).withDefault(LangName.french).validate(badLangName)
// -> langName6: LangName.french
```

---
### Other utilitities:

- **uuid()**
Just in case you don't want to strain your fingers by typing `string().trim().uuid()`
- **sha256Hex()**
Checks if valid sha256 string in hex, outputs all in lowercase letters
- **mobilePhoneNumber_cn()**
Checks if valid 11-digit mobile phone number used in Mainland China

And more to come...

---

### LEGACY CODE BELOW 
(Depracated, do not use, to be removed in the future): 

- **enumSchema()**
```typescript
enum LangName {
	english='english',
	french='french',
}

const langNameSchema = enumSchema(LangName)
const someLangName = 'english'

const validatedLangName : LangName | null | undefined = await langNameSchema.validate(someLangName)
```

- **enumSchemaWithDefault**
```typescript
enum LangName {
	english='english',
	french='french',
}

const langNameSchema = enumSchemaWithDefault(LangName, LangName.french)
const someLangName = undefined

const validatedLangName : LangName = await langNameSchema.validate(someLangName)
console.log(validatedLangName)
// output: "french"
```

- **enumSchemaRequired()**
``` typescript
enum LangName {
	english='english',
	french='french',
}

const langNameSchema = enumSchemaRequired(LangName)
const someLangName = undefined

const validatedLangName : LangName = await langNameSchema.validate(someLangName)
// validation fails and throws an error
```

- **enumSchemeUndefinedOnError**
```typescript
enum LangName {
	english='english',
	french='french',
}

const langNameSchema = enumSchemeUndefinedOnError(LangName).default(LangName.english)
const someLangName = "aaa"

const validatedLangName : LangName = await langNameSchema.validate(someLangName)
console.log(validatedLangName)
// output: "english"
```
