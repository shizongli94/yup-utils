There are some utility schemas for validation with yup with CORRECT TYPES.

First of all, the most wanted typescript enum validation: 
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

- **uuid()**
Just in case you don't want to strain your fingers by typing `string().trim().uuid()`
- **sha256Hex()**
Checks if valid sha256 string in hex, outputs all in lowercase letters
- **mobilePhoneNumber_cn()**
Checks if valid 11-digit mobile phone number used in Mainland China

And more to come...