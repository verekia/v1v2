CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Adapted from https://github.com/Jakeii/nanoid-postgres
-- Using modulo instead of bitwise operator, custom alphabet, default size to 22
CREATE OR REPLACE FUNCTION nanoid(size int DEFAULT 22)
RETURNS text AS $$
DECLARE
  id text := '';
  i int := 0;
  alphabet text := '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  bytes bytea := gen_random_bytes(size);
  pos int;
BEGIN
  WHILE i < size LOOP
    pos := get_byte(bytes, i) % length(alphabet) + 1; -- + 1 because substr starts at 1
    id := id || substr(alphabet, pos, 1);
    i := i + 1;
  END LOOP;
  RETURN id;
END
$$ LANGUAGE PLPGSQL STABLE;
