There are some utility schemas for validation with yup with CORRECT TYPES.

First of all, the most wanted typescript enum validation: 
- **enum()**

```javascript
enum LangName {
	english='english',
	french='french',
}

const langNameSchema = enumSchema(LangName)
const someLangName = 'english'

const validatedLangName : LangName | null | undefined = await langNameSchema.validate(someLangName)
```
- **uuid()**
Just in case you don't want to strain your fingers by typing `string().trim().uuid()`
- **sha256Hex()**
Checks if valid sha256 string in hex, outputs all in lowercase letters
- **mobilePhoneNumber_cn()**
Checks if valid 11-digit mobile phone number used in Mainland China

And more to come...